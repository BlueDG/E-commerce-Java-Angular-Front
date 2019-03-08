import { Component, OnInit } from '@angular/core';
import { Order, Game, GameCart } from 'src/models';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-affiche-commande',
  templateUrl: './affiche-commande.component.html',
  styleUrls: ['./affiche-commande.component.css']
})
export class AfficheCommandeComponent implements OnInit {

  order: Order = {};
  gameCart: GameCart[] = [];
  date: string;
  date1: Date;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      this.order = JSON.parse(params.toEdit) as Order;
      this.gameCart = this.order.games;
      this.date1 = new Date(this.order.orderDate);
      this.date = `${this.date1.getFullYear()}/${this.date1.getMonth()}/${this.date1.getDay()}`;
    })
  }
}
