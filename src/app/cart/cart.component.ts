import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Order, GameCart, Credential } from 'src/models';
import { DataService } from '../services/data.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  purchaseList: GameCart[];
  total: number = 0;
  private _success = new Subject<string>();
  private _fail = new Subject<string>();
  successMessage: string;
  failMessage: string;
  order: Order;

  constructor(private _serv: DataService, private modalService: NgbModal) { }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
    this.purchaseList = JSON.parse(localStorage.getItem("purchaseList")) as GameCart[];
    this.purchaseList.forEach(value => {
      this.total = this.total + value.game.price * value.quantity;
    })

  }

  ngOnInit() {
    this.purchaseList = JSON.parse(localStorage.getItem("purchaseList")) as GameCart[];
    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => {
      this.successMessage = null;
    });
    this._fail.subscribe((message) => this.failMessage = message);
    this._fail.pipe(
      debounceTime(5000)
    ).subscribe(() => this.failMessage = null);
  }

  removeFromCart(obj: GameCart) {
    let i: number = this.purchaseList.findIndex(i => i == obj);
    if (i >= 0) {
      console.log(this.purchaseList[i])
      this.purchaseList.splice(i, 1)
      this.total = 0;
      this.purchaseList.forEach(value => {
        this.total = this.total + value.game.price * value.quantity;
      })
    } else { console.log(i) }
    localStorage.setItem("purchaseList", JSON.stringify(this.purchaseList));
  }

  checkout() {

    this._serv.createOrder(this.order = {
      games: this.purchaseList,
      user: {
        username: localStorage.getItem("username"),
        credential: localStorage.getItem("credential") as Credential
      },
      orderDate: new Date()
    }).subscribe(
      succes => {
        this.purchaseList = [];
        this.total = 0;
        localStorage.setItem("purchaseList", JSON.stringify(this.purchaseList));
      }, error => {
        this.changeFailMessage();
        console.log(`Erreur login : ${error}`)
      })
  }

  public changeSuccessMessage() {
    this._success.next('Order passed');
  }

  public changeFailMessage() {
    this._fail.next('Error in order processing');
  }
}
