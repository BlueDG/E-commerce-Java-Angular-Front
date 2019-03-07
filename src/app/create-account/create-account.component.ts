import { Component, OnInit } from '@angular/core';
import { User, Credential } from 'src/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  user: User = {};
  message: string = '';
  credential : string;
  constructor(private _data: DataService) {

  }

  ngOnInit() {
    this.credential = localStorage.getItem("credential");
  }

  submit() {
    this.user.credential = Credential.REGISTER;
    this._data.createAccount(this.user).subscribe(
      value => {
        this.message = 'Enregistrement réussi.';
        console.log(this.user);
      },
      error => { this.message = "Erreur lors de l'enregistrement." }
    );
    console.log(this.user);
  }

}
