import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-produit-page',
  templateUrl: './produit-page.component.html',
  styleUrls: ['./produit-page.component.css']
})
export class ProduitPageComponent implements OnInit {

  gameToShow : Game;
  date : string;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      this.gameToShow = JSON.parse(params.toShow) as Game;
      this.date = moment(this.gameToShow.date).format('MM/DD/YYYY');
    })
  }

}
