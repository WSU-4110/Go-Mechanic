import { Injectable } from '@angular/core';
<<<<<<< HEAD
import {Auth, signInWithEmailAndPassword, authState} from '@angular/fire/auth';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { switchMap,from } from 'rxjs';
=======
<<<<<<< HEAD
import {
  Auth, signInWithEmailAndPassword, authState} from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
=======
import {Auth, signInWithEmailAndPassword, authState} from '@angular/fire/auth';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { switchMap,from } from 'rxjs';
>>>>>>> 9ea170d17660b138e5eb9b82859c09694cd3a66e
>>>>>>> origin/development-Jim

@Injectable({
  providedIn: 'root',
})
<<<<<<< HEAD
export class AuthenticationService {
=======
<<<<<<< HEAD
export class AuthService {
=======
export class AuthenticationService {
>>>>>>> 9ea170d17660b138e5eb9b82859c09694cd3a66e
>>>>>>> origin/development-Jim
  currentUser$ = authState(this.auth);

  constructor(private auth: Auth) {}


<<<<<<< HEAD
  login(email: string, password: string){
=======
<<<<<<< HEAD
  login(email: string, password: string): Observable<any> {
=======
  login(email: string, password: string){
>>>>>>> 9ea170d17660b138e5eb9b82859c09694cd3a66e
>>>>>>> origin/development-Jim
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  logout(){   
    return from(this.auth.signOut()); 
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/development-Jim

  signUp(name: string, email: string, password: string){
    return from(createUserWithEmailAndPassword(this.auth, email, password))
  }
<<<<<<< HEAD
=======
>>>>>>> 9ea170d17660b138e5eb9b82859c09694cd3a66e
>>>>>>> origin/development-Jim
}