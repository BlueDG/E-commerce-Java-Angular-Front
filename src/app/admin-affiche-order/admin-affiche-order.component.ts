import { Component, OnInit } from '@angular/core';
import { GameCart, Order, User } from 'src/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-affiche-order',
  templateUrl: './admin-affiche-order.component.html',
  styleUrls: ['./admin-affiche-order.component.css']
})
export class AdminAfficheOrderComponent implements OnInit {

  order: Order = {};
  gameCart: GameCart[] = [];
  date: string;
  date1: Date;

  constructor(private _route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      this.order = JSON.parse(params.toEdit) as Order;
      this.gameCart = this.order.games;
      this.date1 = new Date(this.order.orderDate);
      this.date = `${this.date1.getFullYear()}/${this.date1.getMonth()}/${this.date1.getDay()}`;
    })
  }

}
