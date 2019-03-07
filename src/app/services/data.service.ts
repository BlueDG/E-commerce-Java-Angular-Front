import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, UserLight, PostGame, GamePaging, Game, GameCart, Order, OrderPaging } from 'src/models';
import { Observable, of } from 'rxjs';



const URL_BACKEND = environment.backendUrl;
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  }),
  withCredentials: true
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

  logout() {
    return this._http.get(`${URL_BACKEND}/logout`, httpOptions);
  }

  createAccount(user: User) {
    return this._http.post<User>(`${environment.backendUrl}/create-account`, user, httpOptions);
  }

  searchGameAdmin(page: string, postGame: PostGame): Observable<GamePaging> {
    httpOptions.headers = httpOptions.headers.set('Page', page);
    return this._http.post<GamePaging>(`${environment.backendUrl}/game/search`, postGame, httpOptions);
  }

  createGameAdmin(game: Game): Observable<Game> {
    return this._http.post<Game>(`${environment.backendUrl}/game`, game, httpOptions);
  }

  deleteGameAdmin(game: Game): Observable<Game> {
    return this._http.delete(`${environment.backendUrl}/game/${game.id.toString()}`, httpOptions);
  }

  activateDeactivate(game: Game): Observable<GamePaging> {
    return this._http.put<GamePaging>(`${environment.backendUrl}/game/activation`, game, httpOptions);
  }

  updateGameAdmin(game: Game): Observable<Game> {
    return this._http.put<Game>(`${environment.backendUrl}/game`, game, httpOptions);
  }

  searchAllGame(page: string): Observable<GamePaging> {
    httpOptions.headers = httpOptions.headers.set('Page', page);
    return this._http.get<GamePaging>(`${environment.backendUrl}/visitor`, httpOptions);
  }

  searchGameVisitor(page: string, game: PostGame): Observable<GamePaging> {
    httpOptions.headers = httpOptions.headers.set('Page', page);
    return this._http.post<GamePaging>(`${environment.backendUrl}/visitor`, game);
  }

  searchUserByUsername(username: string): Observable<User> {
    return this._http.post<User>(`${environment.backendUrl}/user`, username, httpOptions);
  }

  updateProfil(user: User): Observable<User> {
    return this._http.put<User>(`${environment.backendUrl}/user`, user, httpOptions);
  }

  createOrder(order: Order) {
    console.log(order)
    return this._http.post<GameCart[]>(`${environment.backendUrl}/order`, order, httpOptions);
  }

  findAllOrders(page: number): Observable<OrderPaging> {
    let id: number = Number(localStorage.getItem('userId'));
    httpOptions.headers = httpOptions.headers.set('Page', page.toString());
    return this._http.post<OrderPaging>(`${environment.backendUrl}/order/all`, id, httpOptions);
  }

  findOrderById(): Observable<Order>{
    return null;
  }
}


