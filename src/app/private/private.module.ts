//Standard Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routing Imports
import { SharedModule } from '../shared/shared.module';

//Page Imports
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
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
