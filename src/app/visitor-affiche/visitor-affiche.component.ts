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
  @Input() name: string;

  games: Game[];
  postGame: PostGame;
  page: number;
  totalResult: number;

  private _fail = new Subject<string>();

  constructor(private _data: DataService, private _route: ActivatedRoute) { }

  ngOnInit() {

    this._route.queryParams.subscribe(params => { this.plateform = params.plateform as string; this.genre = params.genre as string; this.name = params.name as string })

    let game: PostGame = {
      name: this.name,
      plateform: this.plateform,
      genre: this.genre
    }

    this.page = 1;
    this.postGame = game;
    this.printNewPage();
  }

  printNewPage() {
    this._data.searchGameVisitor(this.page.toString(), this.postGame).subscribe(
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

  public changeFailMessage(msg: string) {
    this._fail.next(msg);
  }

  newSearch() {
    window.location.reload();
  }
}
