import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AdminRechercheComponent } from './admin-recherche/admin-recherche.component';
import { AppComponent } from './app.component';

import { AdminCreerComponent } from './admin-creer/admin-creer.component';

import { AccueilComponent } from './accueil/accueil.component';
import { ProduitPageComponent } from './produit-page/produit-page.component';
import { ProduitListeComponent } from './produit-liste/produit-liste.component';
import { AdminModifierComponent } from './admin-modifier/admin-modifier.component';
import { VisitorAfficheComponent } from './visitor-affiche/visitor-affiche.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ProfilComponent } from './profil/profil.component';
import { ProfilModifierComponent } from './profil-modifier/profil-modifier.component';
import { ListOrderComponent } from './list-order/list-order.component';


const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'search', component: AdminRechercheComponent },
  { path: 'create', component: AdminCreerComponent },
  { path: 'produitPage', component: ProduitPageComponent },
  { path: 'produitListe', component: ProduitListeComponent },
  { path: 'modif', component: AdminModifierComponent },
  { path: 'visite', component: VisitorAfficheComponent },
  { path: 'pageprod', component: ProduitPageComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'profil-modif', component: ProfilModifierComponent },
  { path: 'order-list', component: ListOrderComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
