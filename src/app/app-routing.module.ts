import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {ActivateGuard} from './activate.guard';

const routes: Routes = [

  {
    path:'login',component: LoginComponent
  },
{
  path:'registration',component:RegistrationComponent
},
{
  path:'dashboard', canActivate: [ActivateGuard] ,component:DashboardComponent 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
