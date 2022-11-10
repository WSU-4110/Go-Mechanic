import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  updateProfile,
  UserInfo,
} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { concatMap, Observable, from, of, switchMap } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/user.service';

@Injectable({
  providedIn: 'root',
})

export class AuthenticationService {

  currentUser$ = authState(this.auth);

  constructor(private auth: Auth, private fireauth: AngularFireAuth,private  userService: UsersService, private toast: HotToastService, private router: Router) {}

  login(email: string, password: string){
    this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
      localStorage.setItem('token','true');

      if(res.user?.emailVerified == true) {
        this.router.navigate(['dashboard']);
      } else {
        this.router.navigate(['/verifyemail']);
      }

  }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
  })
  }

  logout(){   
    return from(this.auth.signOut()); 
  }

  signUp(email: string, password: string){
    this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
      alert('Registration Successful');
      this.sendEmailForVerification(res.user);
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
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

  sendEmailForVerification(user : any) {
    console.log(user);
    user.sendEmailVerification().then((res : any) => {
      this.router.navigate(['/verifyemail']);
    }, (err : any) => {
      alert('Something went wrong. Not able to send verification to your email.')
    })
  }

}