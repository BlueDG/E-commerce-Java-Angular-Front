import { Component, OnInit } from '@angular/core';
import { Order } from 'src/models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {

  page: number = 1;
  orders: Order[];
  totalResult: number;

  constructor(private _serv: DataService) { }

  ngOnInit() {
    this._serv.findAllOrders(1).subscribe(
      succes => {
        this.orders = succes.orders;
        this.totalResult = succes.pages;
      }, error => {
        console.log("erreur recuperation data");
      }
    )
  }

  printNewPage() {
    this._serv.findAllOrders(this.page).subscribe(
      succes => {
        this.orders = succes.orders;
        this.totalResult = succes.pages;
      }, error => {
        console.log("erreur recuperation data");
      }
    )
  }

}
