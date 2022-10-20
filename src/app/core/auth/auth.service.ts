import { Injectable } from '@angular/core';
import {Auth, signInWithEmailAndPassword, authState} from '@angular/fire/auth';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { switchMap,from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  currentUser$ = authState(this.auth);

  constructor(private auth: Auth) {}


  login(email: string, password: string){
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  logout(){   
    return from(this.auth.signOut()); 
  }

  signUp(name: string, email: string, password: string){
    return from(createUserWithEmailAndPassword(this.auth, email, password))
  }
}