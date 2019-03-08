import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-produit-liste',
  templateUrl: './produit-liste.component.html',
  styleUrls: ['./produit-liste.component.css']
})
export class ProduitListeComponent implements OnInit {

  page: number = 1;

  games: Game[];
  totalResult: number;

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.searchAllGame("1").subscribe(
      value => {
        if (value.games.length == 0) {
          console.log('aucun resultat');
        }
        this.games = value.games;
        this.totalResult = value.pages;
      },
      error => { console.log("Erreur lors de l'enregistrement."); }
    );
  }
  newSearch() {
    window.location.reload();
  }

  printNewPage() {
    this._data.searchAllGame(this.page.toString()).subscribe(
      value => {

        this.games = value.games;
      },
      error => { }
    );
  }
}
