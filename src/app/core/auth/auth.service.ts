import { Injectable, NgZone } from '@angular/core';
import {Auth, signInWithEmailAndPassword, authState, updateProfile, createUserWithEmailAndPassword} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth'; //Implementing verification email service
import { Router } from '@angular/router';
import { switchMap,from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  currentUser$ = authState(this.auth);

  constructor(
    private auth: Auth,
    public afAuth: AngularFireAuth, //Inject Firebase auth service
    public router : Router, //inject route service
    public ngZone : NgZone, //NgZone service removes outsid scope warning
    ) {}

//Email Verification Method
SendVerificationMail(){
  return this.afAuth.currentUser
  .then((user) => {
    return user?.sendEmailVerification();
  })
  .then(() => {
    this.router.navigate(['verify-email-address']);
  });
}


  login(email: string, password: string){
    return this.afAuth
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      if (result.user?.emailVerified !== true) {
        this.SendVerificationMail();
        window.alert(
          'Please validate your email address, check your inbox!'
        );
      } else {
        this.ngZone.run(() => {
          this.router.navigate(['<!-- enter your route name here -->']);
        });
      }
    })
    .catch(err => console.log(err));
  }

  logout(){
    return from(this.auth.signOut());
  }

  signUp(name: string, email: string, password: string){
    return this.afAuth.createUserWithEmailAndPassword(email, password)

    .then((result)=>{
    this.SendVerificationMail()
    })
    .catch(err => console.log(err));
  }
}