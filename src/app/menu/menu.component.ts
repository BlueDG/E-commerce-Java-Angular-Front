import { Component, OnInit } from '@angular/core';
import { Credential } from 'src/models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  credential : string = Credential.VISITOR;

  constructor() { }

  ngOnInit() {
    this.credential = sessionStorage.getItem("credential")
  }

}
