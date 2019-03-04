import { Component, OnInit, Input } from '@angular/core';
import { Game, PostGame } from 'src/models';
import { AdminRechercheComponent } from '../admin-recherche/admin-recherche.component';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-admin-affiche',
  templateUrl: './admin-affiche.component.html',
  styleUrls: ['./admin-affiche.component.css']
})
export class AdminAfficheComponent implements OnInit {

  page: number = 1;

  @Input() games: Game[];
  @Input() totalResult: number;
  @Input() gameSearch: PostGame;

  constructor(private _data: DataService) { }

  ngOnInit() {
  }

  newSearch() {
    window.location.reload();
  }

  delete(game: Game) {
    this._data.deleteGameAdmin(game)
  }

  printNewPage() {
    this._data.searchGameAdmin(this.page.toString(), this.gameSearch).subscribe(
      value => {

        this.games = value.games;
      },
      error => { }
    );
  }

}
