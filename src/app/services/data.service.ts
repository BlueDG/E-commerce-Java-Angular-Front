import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User, UserLight, PostGame, GamePaging, Game, GameCart, Order, OrderPaging, PostOrder } from 'src/models';
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
    let basicAuth: string = btoa(user.username + ':' + user.password);

    const httpOptionsWithBasicAuth = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": 'Basic ' + basicAuth
      }),
      withCredentials: true
    };

    return this._http.get<UserLight>(`${URL_BACKEND}/user`, httpOptionsWithBasicAuth);
  }

  logout() {
    return this._http.get(`${URL_BACKEND}/user/logout`, httpOptions);
  }

  createAccount(user: User) {
    return this._http.post<User>(`${environment.backendUrl}/create-account`, user, httpOptions);
  }

  searchGameAdmin(page: string, postGame: PostGame): Observable<GamePaging> {
    let httpOptionsSearch = {
      headers: httpOptions.headers.append('page', page),
      withCredentials: true
    };

    return this._http.post<GamePaging>(`${environment.backendUrl}/game/search`, postGame, httpOptionsSearch);
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
    let httpOptionsSearch = {
      headers: httpOptions.headers.append('page', page),
      withCredentials: true
    };

    return this._http.get<GamePaging>(`${environment.backendUrl}/visitor`, httpOptionsSearch);
  }

  searchGameVisitor(page: string, game: PostGame): Observable<GamePaging> {
    let httpOptionsSearch = {
      headers: httpOptions.headers.append('page', page),
      withCredentials: true
    };

    return this._http.post<GamePaging>(`${environment.backendUrl}/visitor`, game, httpOptionsSearch);
  }

  searchUserByUsername(username: string): Observable<User> {
    return this._http.post<User>(`${environment.backendUrl}/user`, username, httpOptions);
  }

  updateProfil(user: User): Observable<User> {
    return this._http.put<User>(`${environment.backendUrl}/user`, user, httpOptions);
  }

  createOrder(order: Order) {
    return this._http.post<GameCart[]>(`${environment.backendUrl}/order`, order, httpOptions);
  }

  findAllOrders(page: string): Observable<OrderPaging> {
    let id: number = Number(localStorage.getItem('userId'));
    let httpOptionsSearch = {
      headers: httpOptions.headers.append('page', page),
      withCredentials: true
    };
    return this._http.post<OrderPaging>(`${environment.backendUrl}/order/myorders`, id, httpOptionsSearch);
  }

  findOrdersAdmin(page: string, postOrder: PostOrder): Observable<OrderPaging> {
    let httpOptionsSearch = {
      headers: httpOptions.headers.append('page', page),
      withCredentials: true
    };
    return this._http.post<OrderPaging>(`${environment.backendUrl}/order/all`, postOrder, httpOptionsSearch);
  }

  findOrderById(): Observable<Order> {
    return null;
  }
}


