import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PostGame, Game } from 'src/models';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-admin-recherche',
  templateUrl: './admin-recherche.component.html',
  styleUrls: ['./admin-recherche.component.css']
})
export class AdminRechercheComponent implements OnInit {

  postGame: PostGame = {};
  games: Game[] = [];
  pages: number;

  private _fail = new Subject<string>();
  failMessage: string;

  constructor(private _data: DataService) { }

  ngOnInit() {
    this.games = [];
    this._fail.subscribe((message) => this.failMessage = message);
    this._fail.pipe(
      debounceTime(5000)
    ).subscribe(() => this.failMessage = null);
  }

  submit() {
    this._data.searchGameAdmin("1", this.postGame).subscribe(
      value => {
        if (value.games.length == 0) {
          this.changeFailMessage('aucun resultat');
        }
        this.games = value.games;
        this.pages = value.pages;
        console.log(this.pages);
      },
      error => { this.changeFailMessage("Erreur lors de l'enregistrement."); }
    );
  }

  public changeFailMessage(msg: string) {
    this._fail.next(msg);
  }

}




