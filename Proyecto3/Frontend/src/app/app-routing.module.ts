import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pant/login/pant/login/login.component';
import { MainComponent } from './pant/main/pant/main/main.component';
import { MainPant1Component } from './pant/pant1/pant/main-pant1/main-pant1.component';
import { MainPant2Component } from './pant/pant2/pant/main-pant2/main-pant2.component';
import { MainPant3Component } from './pant/pant3/pant/main-pant3/main-pant3.component';
import { MainPant4Component } from './pant/pant4/pant/main-pant4/main-pant4.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'pant1',
    component: MainPant1Component,
  },
  {
    path: 'pant2',
    component: MainPant2Component,
  },
  {
    path: 'pant3',
    component: MainPant3Component,
  },
  {
    path: 'pant4',
    component: MainPant4Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
