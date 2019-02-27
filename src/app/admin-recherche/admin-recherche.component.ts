import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/services/data.service';
import { PostGame, Plateforme } from 'src/models';

@Component({
  selector: 'app-admin-recherche',
  templateUrl: './admin-recherche.component.html',
  styleUrls: ['./admin-recherche.component.css']
})
export class AdminRechercheComponent implements OnInit {

  postGame : PostGame = {};
  message : string = "";

  constructor(private _data: DataService) { }

  ngOnInit() {
  }

  submit() {
    this._data.creerPostGame(this.postGame).subscribe(
      value => { this.message = 'Enregistrement réussi.'},
      error => { this.message = "Erreur lors de l'enregistrement."}
    );
  }
}


  

