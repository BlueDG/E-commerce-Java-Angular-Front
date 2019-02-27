import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { UserLight } from 'src/models';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserLight = { username: '', password: '', credential: null };

  constructor(
    private _serv: DataService
  ) { }

  ngOnInit() {
    sessionStorage.setItem('token', '');
  }

  connect() {
    this._serv.login(this.user).subscribe(
      succes => {
        this.user.credential = succes.credential;
        sessionStorage.setItem('username', this.user.username);
        sessionStorage.setItem('credential', this.user.credential);
        console.log(this.user);
      }, error => {
        alert("Authentication failed.")
        console.log(`Erreur login : ${error}`)
      }
    )
  }

}

