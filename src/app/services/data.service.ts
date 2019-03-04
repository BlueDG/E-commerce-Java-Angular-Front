import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, UserLight, PostGame, GamePaging, Game } from 'src/models';
import { Observable, of } from 'rxjs';



const URL_BACKEND = environment.backendUrl;
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  login(user: UserLight) {
    btoa(user.username + ':' + user.password);
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Basic ' + btoa(user.username + ':' + user.password));

    return this._http.get<UserLight>(`${URL_BACKEND}/user`, httpOptions);
  }

  searchGameAdmin(page: string, postGame: PostGame): Observable<GamePaging> {
    httpOptions.headers = httpOptions.headers.set('Page', page);
    return this._http.post<GamePaging>(`${environment.backendUrl}/game/search`, postGame, httpOptions);
  }

  createGameAdmin(game: Game) {
    return this._http.post<Game>(`${environment.backendUrl}/game`, game, httpOptions);
  }

  deleteGameAdmin(game: Game) {
    return this._http.delete(`${environment.backendUrl}/game/${game.id.toString()}`, httpOptions);
  }

  activateDeactivate(game: Game) {
    return this._http.put<GamePaging>(`${environment.backendUrl}/game/activation`, game, httpOptions);
  }
}
