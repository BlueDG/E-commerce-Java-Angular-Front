import { Component, OnInit } from '@angular/core';
import { PostOrder, OrderPaging } from 'src/models';
import { Subject } from 'rxjs';
import { DataService } from '../services/data.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-admin-search-order',
  templateUrl: './admin-search-order.component.html',
  styleUrls: ['./admin-search-order.component.css']
})
export class AdminSearchOrderComponent implements OnInit {

  postOrder: PostOrder = {};
  orderPaging: OrderPaging;
  pages: number = 1

  private _fail = new Subject<string>();
  failMessage: string;

  constructor(private _serv: DataService) { }

  ngOnInit() {
    this.orderPaging = {
      orders: [],
      pages: 0
    };
    this._fail.subscribe((message) => this.failMessage = message);
    this._fail.pipe(
      debounceTime(5000)
    ).subscribe(() => this.failMessage = null);
  }


  submit() {
    this._serv.findOrdersAdmin(this.pages.toString(), this.postOrder).subscribe(
      value => {
        if (value.orders.length == 0) {
          this.changeFailMessage('aucun resultat');
        }
        this.orderPaging.orders = value.orders;
        this.orderPaging.pages = value.pages;
      },
      error => { this.changeFailMessage("Erreur lors de l'enregistrement."); }
    );
  }

  public changeFailMessage(msg: string) {
    this._fail.next(msg);
  }
}
