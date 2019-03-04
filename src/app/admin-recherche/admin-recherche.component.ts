import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PostGame } from 'src/models';

@Component({
  selector: 'app-admin-recherche',
  templateUrl: './admin-recherche.component.html',
  styleUrls: ['./admin-recherche.component.css']
})
export class AdminRechercheComponent implements OnInit {

  postGame: PostGame = {};
  message: string = "";
  games: PostGame[] = [];
  pages: number;

  constructor(private _data: DataService) { }

  ngOnInit() {
    this.games = [];
  }

  submit() {
    this._data.creerPostGame("1", this.postGame).subscribe(
      value => {
        this.message = 'Enregistrement réussi.';
        this.games = value.games;
        this.pages = value.pages;
        console.log(value.games);
      },
      error => { this.message = "Erreur lors de l'enregistrement." }
    );
  }


}




