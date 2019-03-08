import { Component, OnInit } from '@angular/core';
import { Game, GameCart } from 'src/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produit-page',
  templateUrl: './produit-page.component.html',
  styleUrls: ['./produit-page.component.css']
})


export class ProduitPageComponent implements OnInit {

  gameToShow: Game;
  purchaseList: GameCart[];
  dateToShow: Date;
  date: string;

  gameToAdd: GameCart = {
    game: this.gameToShow,
    quantity: 1
  };

  stock: number;
  credential : string;
  

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      this.gameToShow = JSON.parse(params.toShow) as Game;
      this.dateToShow = new Date(this.gameToShow.date);
      this.date = `${this.dateToShow.getFullYear()}/${this.dateToShow.getMonth()}/${this.dateToShow.getDay()}`;
    })
    this.stock = this.gameToShow.stock;
    this.credential = localStorage.getItem("credential");
  }

  addCart() {
    this.purchaseList = JSON.parse(localStorage.getItem("purchaseList")) as GameCart[];
    this.gameToAdd.game = this.gameToShow;

    this.purchaseList.push(this.gameToAdd);
    localStorage.setItem("purchaseList", JSON.stringify(this.purchaseList));
  }

}


