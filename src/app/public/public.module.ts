import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { SharedModule } from '../shared/shared.module';
import { EnginelightpageComponent } from './components/enginelightpage/enginelightpage.component';
import { BrakejobpageComponent } from './components/brakejobpage/brakejobpage.component';
import { SearchrepairspageComponent } from './components/searchrepairspage/searchrepairspage.component';
import { MaintenancepageComponent } from './components/maintenancepage/maintenancepage.component';




@NgModule({
  declarations: [
    PublicComponent,
    EnginelightpageComponent,
    BrakejobpageComponent,
    SearchrepairspageComponent,
    MaintenancepageComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }
