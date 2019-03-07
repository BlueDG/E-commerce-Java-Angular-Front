import { Component, OnInit } from '@angular/core';
import { Credential } from 'src/models';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  credential: string = Credential.VISITOR;

  name: string;
  genre: string[] = ['AVENTURE', 'FPS', 'ARCADE', 'RPG', 'SPORT'];
  plateforme: string[] = ['GAMEBOY', 'MEGA_DRIVE', 'NES', 'PLAYSTATION', 'SUPER_NINTENDO'];

  constructor(private _router: Router, private _serv: DataService) { }

  ngOnInit() {
    this.credential = localStorage.getItem("credential");
  }

  submit() {
    this._router.navigate(['/visite'], { queryParams: { name: this.name } });
  }

  deco() {

    this._serv.logout().subscribe(succes => {

      localStorage.setItem("credential", "VISITOR");
      this.credential = localStorage.getItem("credential");
      localStorage.setItem("username", "");
      this._router.navigateByUrl('');
    }, error => {

    }
    );
    //window.location.reload();
  }
}

//sessionstorage.getItem(credential);
