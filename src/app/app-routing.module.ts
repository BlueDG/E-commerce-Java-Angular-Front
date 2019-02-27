import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from 'src/app/app.component'
import { AdminRechercheComponent } from './admin-recherche/admin-recherche.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: AdminRechercheComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
