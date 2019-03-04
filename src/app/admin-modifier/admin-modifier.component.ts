import { Component, OnInit, Input } from '@angular/core';
import { Game, Genre, Plateform } from 'src/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-modifier',
  templateUrl: './admin-modifier.component.html',
  styleUrls: ['./admin-modifier.component.css']
})
export class AdminModifierComponent implements OnInit {

  //@Input() 
  gameToEdit: Game = {};
  genre: Genre[] = [Genre.AVENTURE, Genre.FPS, Genre.PLATEFORME, Genre.RPG];
  plateforme: Plateform[] = [Plateform.GAMEBOY, Plateform.MEGA_DRIVE, Plateform.NES, Plateform.PLAYSTATION, Plateform.SUPER_NINTENDO];


  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      this.gameToEdit = JSON.parse(params.toEdit) as Game;
    })
    console.log(this.gameToEdit);
    //console.log(this.gameToEdit)
  }

}


