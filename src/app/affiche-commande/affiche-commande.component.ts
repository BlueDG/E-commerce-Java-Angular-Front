import { Component, OnInit } from '@angular/core';
import { Order } from 'src/models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-affiche-commande',
  templateUrl: './affiche-commande.component.html',
  styleUrls: ['./affiche-commande.component.css']
})
export class AfficheCommandeComponent implements OnInit {

  order: Order;

  constructor(private _data: DataService) { }

  ngOnInit() {

  }

}
