import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['home'])

const routes: Routes = [ 
  
];

@NgModule({
  declarations: [],
  imports: 
  [RouterModule.forChild(routes),
  CommonModule,
  RouterModule.forRoot(routes)],
  exports: 
  [RouterModule]
})

export class PrivateRoutingModule { }
