import { Component, OnInit, Input } from '@angular/core';
import { PostGame } from 'src/models';
import { AdminRechercheComponent } from '../admin-recherche/admin-recherche.component';


@Component({
  selector: 'app-admin-affiche',
  templateUrl: './admin-affiche.component.html',
  styleUrls: ['./admin-affiche.component.css']
})
export class AdminAfficheComponent implements OnInit {

  @Input() games: PostGame[];

  constructor() { }

  ngOnInit() {
  }

  newSearch() {
    window.location.reload();
  }
}
