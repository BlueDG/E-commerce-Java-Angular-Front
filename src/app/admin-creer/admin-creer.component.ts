import { Component, OnInit } from '@angular/core';
import { Game, Genre, Plateform } from 'src/models'
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-admin-creer',
  templateUrl: './admin-creer.component.html',
  styleUrls: ['./admin-creer.component.css']
})
export class AdminCreerComponent implements OnInit {

  game: Game = {};
  genre: Genre[] = [Genre.AVENTURE, Genre.FPS, Genre.PLATEFORME, Genre.RPG];
  plateforme: Plateform[] = [Plateform.GAMEBOY, Plateform.MEGA_DRIVE, Plateform.NES, Plateform.PLAYSTATION, Plateform.SUPER_NINTENDO];

  constructor(private _data: DataService) { }

  ngOnInit() {
  }

  submit() {

  }

}

