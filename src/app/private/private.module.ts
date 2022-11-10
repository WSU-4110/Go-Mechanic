//Standard Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Routing Imports
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './components/private.component';
import { SharedModule } from '../shared/shared.module';
//Page Imports
import { MyAccountComponent } from './pages/myAccount/my-account.component';
import { MySettingsComponent } from './pages/mySettings/my-settings.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PrivateComponent,
    MyAccountComponent,
    MySettingsComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule,
  ],
  exports: [RouterModule]
})
export class PrivateModule { }
