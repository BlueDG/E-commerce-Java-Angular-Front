import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html', 
  styleUrls: ['./accueil.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})

export class AccueilComponent implements OnInit {
  images = [1, 2, 3].map(() => `src/assets/img`);

  constructor(config: NgbCarouselConfig) { 
    // customize default values of carousels used by this component tree
    config.interval = 20000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit() {
  }

}


