//Standard Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routing Imports
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './components/private.component';
import { SharedModule } from '../shared/shared.module';

//Page Imports
import { MySettingsComponent } from './pages/mySettings/my-settings.component';
import { RouterModule } from '@angular/router';
import { MyAccountInfoComponent } from './pages/my-account-info/my-account-info.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    PrivateComponent,
    MySettingsComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule
  ],
  exports: [RouterModule]
})
export class PrivateModule { }
