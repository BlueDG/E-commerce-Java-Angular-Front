import { Component, OnInit } from '@angular/core';
import { Order } from 'src/models';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {

  page: number = 1;
  orders: Order[];
  totalResult: number;

  constructor() { }

  ngOnInit() {
  }

}
