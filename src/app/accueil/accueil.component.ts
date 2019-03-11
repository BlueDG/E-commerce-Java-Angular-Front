import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Game } from 'src/models';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})

export class AccueilComponent implements OnInit {
  images = [1, 2, 3].map(() => `src/assets/img`);
  name: string;
  genre: string[] = ['AVENTURE', 'FPS', 'ARCADE', 'RPG', 'SPORT'];
  plateforme: string[] = ['GAMEBOY', 'MEGA_DRIVE', 'NES', 'PLAYSTATION', 'SUPER_NINTENDO'];

  gameToShow: Game;

  constructor(private _router: Router, config: NgbCarouselConfig, private _data: DataService) {
    // customize default values of carousels used by this component tree
    config.interval = 20000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit() {
  }

  submit() {
    this._router.navigate(['/visite'], { queryParams: { name: this.name } });
  }

  getTheGame(name: string) {
    this._data.searchOneGame(name).subscribe(
      value => {
        this.gameToShow = value;
        this._router.navigate(['/pageprod'], { queryParams: { toShow: JSON.stringify(this.gameToShow) } });
      },
      error => { console.log('Erreur lors de l\'affichage') }
    )
  }
}


