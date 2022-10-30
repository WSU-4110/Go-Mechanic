import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

/** Components we have created for purposes listed on the right side in comments */
import { NavbarComponent } from './core/navbar/navbar.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Coponents for SignupComponent
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { MatMenuModule} from '@angular/material/menu';
=======
<<<<<<< HEAD

=======
import { MatMenuModule} from '@angular/material/menu';
>>>>>>> 9ea170d17660b138e5eb9b82859c09694cd3a66e
>>>>>>> origin/development-Jim
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    MatMenuModule,
=======
<<<<<<< HEAD
    ReactiveFormsModule
=======
    ReactiveFormsModule,
    MatMenuModule,
>>>>>>> 9ea170d17660b138e5eb9b82859c09694cd3a66e
>>>>>>> origin/development-Jim
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }
