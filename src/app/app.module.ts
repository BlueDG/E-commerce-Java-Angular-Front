import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { AdminRechercheComponent } from './admin-recherche/admin-recherche.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitPageComponent } from './produit-page/produit-page.component';
import { ProduitListeComponent } from './produit-liste/produit-liste.component';
import { AdminAfficheComponent } from './admin-affiche/admin-affiche.component';
import { AdminCreerComponent } from './admin-creer/admin-creer.component';
import { AdminModifierComponent } from './admin-modifier/admin-modifier.component';
import { VisitorAfficheComponent } from './visitor-affiche/visitor-affiche.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CartComponent } from './cart/cart.component';
import { ProfilComponent } from './profil/profil.component';
import { ProfilModifierComponent } from './profil-modifier/profil-modifier.component';
import { ListOrderComponent } from './list-order/list-order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    AdminRechercheComponent,
    FooterComponent,
    AccueilComponent,
    ProduitPageComponent,
    ProduitListeComponent,
    AdminAfficheComponent,
    AdminCreerComponent,
    AdminModifierComponent,
    VisitorAfficheComponent,
    CreateAccountComponent,
    CartComponent,
    ProfilComponent,
    ProfilModifierComponent,
    ListOrderComponent,


  ],
  imports: [
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule
  ],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
  bootstrap: [AppComponent]
})
export class AppModule { }
