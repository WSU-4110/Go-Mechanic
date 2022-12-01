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
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    MyInboxComponent,
    ProfileComponent,
    SignupComponent,
  ],

  imports: [
    BrowserModule,
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
  ],

  providers: [UsersService],

  bootstrap: [AppComponent]
})

export class AppModule { }
