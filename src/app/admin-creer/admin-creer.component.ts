import { Component, OnInit } from '@angular/core';
import {Game, Genre} from 'src/models'
import {DataService} from 'src/app/services/data.service';

@Component({
  selector: 'app-admin-creer',
  templateUrl: './admin-creer.component.html',
  styleUrls: ['./admin-creer.component.css']
})
export class AdminCreerComponent implements OnInit {

  game : Game = {};
  genre : Genre = Genre.AVENTURE;

  constructor(private _data: DataService) { }

  ngOnInit() {
  }

  submit() {

  }

}

