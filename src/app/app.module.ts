//Core imports
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
//Routing imports
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

//Firebase imports
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore, } from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire/compat';
import { getStorage, provideStorage } from '@angular/fire/storage';

//Additional
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule} from '@angular/material/menu';
import { NavbarComponent } from './core/navbar/navbar.component';
import { MyInboxComponent } from './private/pages/myInbox/my-inbox.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { ProfileComponent } from './private/pages/profile/profile.component';
import { UsersService } from './core/services/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './public/Pages/signup/signup.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { DateDisplayPipe } from './pipes/date-display.pipe';
import { DatePipe } from '@angular/common';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AgmCoreModule } from "@agm/core";
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { MyAccountInfoComponent } from './private/pages/my-account-info/my-account-info.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MatSelectModule } from '@angular/material/select';
import { HotToastModule } from '@ngneat/hot-toast'; 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    MyInboxComponent,
    ProfileComponent,
    SignupComponent,
    DateDisplayPipe,
    MyAccountInfoComponent,
    FooterComponent
  ],

  imports: [
    BrowserModule,
    GooglePlaceModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    AngularFireModule.initializeApp(environment.firebase),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatOptionModule,
    BrowserAnimationsModule,
    MatListModule,
    MatDividerModule,
    MatSidenavModule,
    MatSelectModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyDnBnebUqKv3TsROEAd6JwhsvFQvWvCasU',
      libraries: ['places']
    }),
    HotToastModule.forRoot(),
  ],

  providers: [DatePipe],

  bootstrap: [AppComponent]
})

export class AppModule { }
