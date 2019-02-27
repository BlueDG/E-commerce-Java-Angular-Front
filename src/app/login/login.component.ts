import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router, private _serv: DataService
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
        this.router.navigate(['']);
      }, error => {
        alert("Authentication failed.")
        console.log(`Erreur login : ${error}`)
      }
    )
  }

}

