import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AdminRechercheComponent } from './admin-recherche/admin-recherche.component';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AdminCreerComponent } from './admin-creer/admin-creer.component';
=======
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitPageComponent } from './produit-page/produit-page.component';
import { ProduitListeComponent } from './produit-liste/produit-liste.component';

>>>>>>> 4640756650256f90c44945dce58f866da5ec3b9a

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'menu', component: MenuComponent },
  { path: 'search', component: AdminRechercheComponent },
<<<<<<< HEAD
  { path: 'create', component: AdminCreerComponent},
=======
  { path: 'produitPage', component: ProduitPageComponent},
  { path: 'produitListe', component: ProduitListeComponent},
>>>>>>> 4640756650256f90c44945dce58f866da5ec3b9a
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
