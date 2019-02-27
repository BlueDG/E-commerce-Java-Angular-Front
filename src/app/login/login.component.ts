import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { User, Credential, UserLight } from 'src/models';
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
    this._serv.login(this.user).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem(
          'token',
          btoa(this.user.username + ':' + this.user.password + ":" + this.user.credential)
        );
        this.router.navigate(['']);
      } else {
        alert("Authentication failed.")
      }
    });
  }

}
