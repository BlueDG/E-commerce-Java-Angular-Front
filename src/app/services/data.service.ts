import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, UserLight, PostGame } from 'src/models';


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
    return this._http.post<UserLight>(`${URL_BACKEND}/user`, user, httpOptions);
  }

  creerPostGame(postGame : PostGame){
    return this._http.post<PostGame>(`${environment.backendUrl}/game`, postGame);
  }

}
