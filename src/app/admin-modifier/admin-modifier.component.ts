import { Component, OnInit, Input } from '@angular/core';
<<<<<<< HEAD
import { Game, Genre, Plateform } from 'src/models'
=======
import { Game, Genre, Plateform } from 'src/models';
>>>>>>> 24e124af3d7887fd3fb9e0fe757869764696d591
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-modifier',
  templateUrl: './admin-modifier.component.html',
  styleUrls: ['./admin-modifier.component.css']
})
export class AdminModifierComponent implements OnInit {

<<<<<<< HEAD
  @Input() gameModif: Game;
  
  genre: Genre[] = [Genre.AVENTURE, Genre.FPS, Genre.PLATEFORME, Genre.RPG];
  plateforme: Plateform[] = [Plateform.GAMEBOY, Plateform.MEGA_DRIVE, Plateform.NES, Plateform.PLAYSTATION, Plateform.SUPER_NINTENDO];
  message: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    
  }


  ngOnDestroy() {
  
=======
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
>>>>>>> 24e124af3d7887fd3fb9e0fe757869764696d591
  }

}


