import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AdminRechercheComponent } from './admin-recherche/admin-recherche.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'search', component: AdminRechercheComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
