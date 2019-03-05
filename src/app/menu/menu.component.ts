import { Component, OnInit } from '@angular/core';
import { Credential, PostGame, Plateform, Genre } from 'src/models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  credential: string = Credential.VISITOR;
  game: PostGame;

  genre: string[] = ['AVENTURE', 'FPS', 'ARCADE', 'RPG', 'SPORT'];
  plateforme: string[] = ['GAMEBOY', 'MEGA_DRIVE', 'NES', 'PLAYSTATION', 'SUPER_NINTENDO'];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this.credential = sessionStorage.getItem("credential")
  }

  submit() {
    this._data.searchGameVisitor('1', this.game).subscribe(
      data => { console.log("reussie"); },
      error => { console.log("pas réussie"); }
    )
  }
}
