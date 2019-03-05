import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produit-page',
  templateUrl: './produit-page.component.html',
  styleUrls: ['./produit-page.component.css']
})
export class ProduitPageComponent implements OnInit {

  gameToShow: Game;
  dateToShow: Date;
  date: string;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      this.gameToShow = JSON.parse(params.toShow) as Game;
      this.dateToShow = new Date(this.gameToShow.date);
      this.date = `${this.dateToShow.getFullYear()}/${this.dateToShow.getMonth()}/${this.dateToShow.getDay()}`;
    })
  }

}
