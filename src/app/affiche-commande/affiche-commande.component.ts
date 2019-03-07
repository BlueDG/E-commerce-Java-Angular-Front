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
  games : GameCart[] = [];

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      this.order = JSON.parse(params.toEdit) as Order;
      console.log(this.order);
      this.games = this.order.games;
    })
  }
}
