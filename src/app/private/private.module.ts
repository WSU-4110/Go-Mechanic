import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { SharedModule } from '../shared/shared.module';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { MyAccountNavbarComponent } from './components/my-account/my-account-navbar/my-account-navbar.component';
import { MyAccountModule } from './components/my-account/my-account.module';

@NgModule({
  declarations: [
    PrivateComponent,
    MyAccountComponent,
    MyAccountNavbarComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule,
    MyAccountModule
  ]
})
export class PrivateModule { }
