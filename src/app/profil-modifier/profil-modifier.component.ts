import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-profil-modifier',
  templateUrl: './profil-modifier.component.html',
  styleUrls: ['./profil-modifier.component.css']
})
export class ProfilModifierComponent implements OnInit {
  user: User;
  message : string = "";

  constructor(private _route: ActivatedRoute, private _data: DataService) { }

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      this.user = JSON.parse(params.obj) as User;
      
      this.user.birthday = new Date(this.user.birthday);
      console.log(this.user);
    })
  }

  submit() {
    this._data.updateProfil(this.user).subscribe(
      value => {
        this.message = 'Enregistrement réussi.';
        console.log(this.user);
      },
      error => {
        this.message = "Erreur lors de l'enregistrement.";
        console.log(this.user);
      }
    );
    localStorage.setItem("username", this.user.username);
  }
}
