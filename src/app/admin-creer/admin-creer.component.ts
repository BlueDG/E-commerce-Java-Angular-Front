import { Component, OnInit } from '@angular/core';
import { Game, Genre, Plateform } from 'src/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-admin-creer',
  templateUrl: './admin-creer.component.html',
  styleUrls: ['./admin-creer.component.css']
})
export class AdminCreerComponent implements OnInit {

  game: Game = {};
  genre: Genre[] = [Genre.AVENTURE, Genre.FPS, Genre.ARCADE, Genre.RPG];
  plateforme: Plateform[] = [Plateform.GAMEBOY, Plateform.MEGA_DRIVE, Plateform.NES, Plateform.PLAYSTATION, Plateform.SUPER_NINTENDO];
  message: string = '';
  constructor(private _data: DataService) { }

  ngOnInit() {
  }

  submit() {
    this._data.createGameAdmin(this.game).subscribe(
      value => {
        this.message = 'Enregistrement réussi.';
        console.log(this.game);
      },
      error => { this.message = "Erreur lors de l'enregistrement." }
    );
  }

}

