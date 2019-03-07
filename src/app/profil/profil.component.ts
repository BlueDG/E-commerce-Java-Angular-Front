import { Component, OnInit } from '@angular/core';
import { User } from 'src/models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user: User = {};
  username: string = "";
  date: string;
  dateToShow: Date;
  credential : string;

  constructor(private _data: DataService) { }

  ngOnInit() {
    this.credential = localStorage.getItem("credential");
    this.username = localStorage.getItem("username");
    this._data.searchUserByUsername(this.username).subscribe(
      value => {
        this.user = value;
        console.log(this.user);
        this.dateToShow = new Date(this.user.birthday);
        this.date = `${this.dateToShow.getFullYear()}/${this.dateToShow.getMonth()}/${this.dateToShow.getDay()}`;
      },
      error => {
        console.log('Erreur ! : ' + error);
      }
    );
  }
}
