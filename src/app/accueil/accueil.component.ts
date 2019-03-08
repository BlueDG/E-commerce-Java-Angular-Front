import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

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

  constructor(private _router: Router, config: NgbCarouselConfig) { 
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




}


