//Standard Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Routing imports
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './components/public.component';
import { SharedModule } from '../shared/shared.module';
//Page imports
import { EnginelightpageComponent } from './Pages/enginelightpage/enginelightpage.component';
import { BrakejobpageComponent } from './Pages/brakejobpage/brakejobpage.component';
import { SearchrepairspageComponent } from './Pages/searchrepairspage/searchrepairspage.component';
import { TermsComponent } from './Pages/terms/terms.component';
import { PrivacypolicyComponent } from './Pages/privacypolicy/privacypolicy.component';
//import { MaintenancepageComponent} from './Pages/maintenancepage/maintenancepage.component';
@NgModule({
  declarations: [
    PublicComponent,
    EnginelightpageComponent,
    BrakejobpageComponent,
    SearchrepairspageComponent,
    TermsComponent,
    PrivacypolicyComponent,
    //MaintenancepageComponent,
  ],

  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ]

})
export class PublicModule { }