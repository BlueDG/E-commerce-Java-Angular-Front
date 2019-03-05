import { Component, OnInit, Input } from '@angular/core';
import { PostGame, Game, Plateform, Genre } from 'src/models';
import { DataService } from '../services/data.service';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visitor-affiche',
  templateUrl: './visitor-affiche.component.html',
  styleUrls: ['./visitor-affiche.component.css']
})
export class VisitorAfficheComponent implements OnInit {

  @Input() plateform: string;
  @Input() genre: string;

  games: Game[];
  page: number;
  totalResult: number;

  private _fail = new Subject<string>();

  constructor(private _data: DataService, private _route: ActivatedRoute) { }

  ngOnInit() {

    this._route.queryParams.subscribe(params => { this.plateform = params.plateform as string; this.genre = params.genre as string; })

    let game: PostGame = {
      plateform: this.plateform,
      genre: this.genre
    }

    this._data.searchGameVisitor('1', game).subscribe(
      value => {
        if (value.games.length == 0) {
          this.changeFailMessage('aucun resultat');
        }
        this.games = value.games;
        this.totalResult = value.pages;
      },
      error => { this.changeFailMessage("Erreur lors de l'enregistrement."); }
    );
  }

  printNewPage() {
    this._data.searchAllGame(this.page.toString()).subscribe(
      value => {

        this.games = value.games;
      },
      error => { }
    );
  }

  public changeFailMessage(msg: string) {
    this._fail.next(msg);
  }
}
