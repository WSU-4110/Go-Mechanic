import { Injectable, NgZone } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  updateProfile,
  UserInfo,
} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { concatMap, Observable, from, of } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})

export class AuthenticationService {

  currentUser$ = authState(this.auth);

  constructor(private auth: Auth,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    private toast: HotToastService) {}

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
          'If you have not received it within 10-15 minutes please check your spam folder...'
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
          'If you have not received it within 10-15 minutes please check your spam folder...'
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

  logout(){   
    return this.auth.signOut().then(() => {
      this.toast.success('Logout successful...');
      this.router.navigate(['/home']);
      this.forceLogout();
    }); 
  }

  signUp(email: string, password: string){
    return from(createUserWithEmailAndPassword(this.auth, email, password));
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