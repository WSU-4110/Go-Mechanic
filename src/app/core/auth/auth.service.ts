import { Injectable, NgZone } from '@angular/core';
import {
  Auth,
  authState,
  updateProfile,
  UserInfo,
} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { concatMap, Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthenticationService {

  currentUser$ = authState(this.auth);

  constructor(
    private auth: Auth,
    public router: Router,
    public afAuth: AngularFireAuth,
    public ngZone: NgZone,
    private toast: HotToastService
    ) {}

    SendVerificationMail() {
      return this.afAuth.currentUser
        .then((user) => {
          return user.sendEmailVerification();
        })
        .then(() => {
          this.toast.info(
            'Please verify your email address...'
          );
          this.toast.info(
            'If you have not received it within 10-15 minuntes please check your spam folder...'
          );
        });
    }

  login(email: string, password: string){
    return this.afAuth
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      if (result.user.emailVerified !== true) {
        this.toast.info(
          'Please verify your email address...'
        );
        this.toast.info(
          'If you have not received it within 10-15 minuntes please check your spam folder...'
        );
        this.forceLogout();
      } 
      else {
        this.ngZone.run(() => {
          this.router.navigate(['/home']);
        });
        this.toast.success('Login successful...');
      }
    })
    .catch(() => {
      this.toast.error('Incorrect email or password...');
    });
 }

 signUp(email: string, password: string){
  return this.afAuth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      this.toast.success('Sign up successful...');
      this.SendVerificationMail();
      this.forceLogout();
    })
    .catch(() => {
      this.toast.error('Email has already been registered...');
    });
  }

  logout(){   
    return this.auth.signOut().then(() => {
      this.toast.success('Logout successful...');
      this.router.navigate(['/home']);
      this.forceLogout();
    }); 
  }

  forceLogout(){   
    return from(this.auth.signOut()); 
  }

  updateProfileData(profileData: Partial<UserInfo>): Observable<any> {
    const user = this.auth.currentUser;
     return of(user).pipe(
       concatMap((user) => {
         if (!user) throw new Error('Not authenticated');

         return updateProfile(user, profileData);
       })
     );
  }
}