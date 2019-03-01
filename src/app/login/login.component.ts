import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { UserLight } from 'src/models';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class LoginComponent implements OnInit {
  user: UserLight = { username: '', password: '', credential: null };

  private _success = new Subject<string>();
  private _fail = new Subject<string>();
  successMessage: string;
  failMessage: string;



  constructor(
    private router: Router, private _serv: DataService, private modalService: NgbModal
  ) {

  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  ngOnInit() {
    sessionStorage.setItem('token', '');


    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(1000)
    ).subscribe(() => {
      this.successMessage = null;
      this.modalService.dismissAll();
      window.location.reload();
    });
    this._fail.subscribe((message) => this.failMessage = message);
    this._fail.pipe(
      debounceTime(5000)
    ).subscribe(() => this.failMessage = null);
  }

  connect() {
    this._serv.login(this.user).subscribe(
      succes => {
        this.user.credential = succes.credential;
        sessionStorage.setItem('username', this.user.username);
        sessionStorage.setItem('credential', this.user.credential);
        console.log(this.user);
        this.changeSuccessMessage();
      }, error => {
        this.changeFailMessage();
        console.log(`Erreur login : ${error}`)
      }
    )
  }

  public changeSuccessMessage() {
    this._success.next('You are now connected');
  }

  public changeFailMessage() {
    this._fail.next('Authentication failed.');
  }

}

