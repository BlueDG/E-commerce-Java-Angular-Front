import { Component, OnInit, Input } from '@angular/core';
import { Order, PostOrder, OrderPaging } from 'src/models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admin-list-order',
  templateUrl: './admin-list-order.component.html',
  styleUrls: ['./admin-list-order.component.css']
})
export class AdminListOrderComponent implements OnInit {

  page: number;
  @Input() orderPaging: OrderPaging;
  @Input() orderSearch: PostOrder;
  dates: string[] = [];
  tempDate: Date;
  totalResult: number;

  constructor(private _serv: DataService) { }

  ngOnInit() {
    this.page = 1;
    this.printNewPage();
  }

  printNewPage() {
    this._serv.findOrdersAdmin(this.page.toString(), this.orderSearch).subscribe(
      value => {
        this.orderPaging.orders = value.orders;
        this.totalResult = value.pages;
        this.orderPaging.orders.forEach(value => {
          this.tempDate = new Date(value.orderDate);
          this.dates.push(`${this.tempDate.getFullYear()}/${this.tempDate.getMonth()}/${this.tempDate.getDay()}`)
        })
      }, error => {
        console.log("erreur recuperation data");
      }
    )
  }

}
