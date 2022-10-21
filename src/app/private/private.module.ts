import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { SharedModule } from '../shared/shared.module';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { MyInboxComponent } from './components/myinbox/my-inbox/my-inbox.component';
import { MySettingsComponent } from './components/mySettings/my-settings/my-settings.component';

@NgModule({
  declarations: [
    PrivateComponent,
    MyAccountComponent,
    MyInboxComponent,
    MySettingsComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule
  ]
})
export class PrivateModule { }
