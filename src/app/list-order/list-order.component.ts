import { Component, OnInit } from '@angular/core';
import { Order } from 'src/models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {

  page: number;
  orders: Order[];
  dates: string[] = [];
  tempDate: Date;
  totalResult: number;

  constructor(private _serv: DataService) { }

  ngOnInit() {
    this.page = 1;
    this.printNewPage();
  }

  printNewPage() {
    this._serv.findAllOrders(this.page.toString()).subscribe(
      succes => {
        this.orders = succes.orders;
        this.totalResult = succes.pages;
        this.orders.forEach(value => {
          this.tempDate = new Date(value.orderDate);
          this.dates.push(`${this.tempDate.getFullYear()}/${this.tempDate.getMonth()}/${this.tempDate.getDay()}`)
        })
      }, error => {
        console.log("erreur recuperation data");
      }
    )
  }

}
