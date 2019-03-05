import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-produit-page',
  templateUrl: './produit-page.component.html',
  styleUrls: ['./produit-page.component.css']
})
export class ProduitPageComponent implements OnInit {

  gameToShow : Game;
  constructor(private _route: ActivatedRoute, private _data: DataService) { }

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      this.gameToShow = JSON.parse(params.toShow) as Game;
    })
  }

}
