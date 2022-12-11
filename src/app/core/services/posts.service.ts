import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  doc,
  docData,
  Firestore,
  query,
} from '@angular/fire/firestore';
import { from, Observable, switchMap, of } from 'rxjs';
import { ProfileUser } from 'src/app/models/user-profile';
import { UsersService } from './user.service';
import { AuthenticationService } from '../auth/auth.service';
import { setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private firestore: Firestore, private userService: UsersService, private authService: AuthenticationService ) { }


//This method  will write 'users' data collection to the 'CommunityProfile' collections, more fields will be added and user role is assigned.
  createPublicProfile(user: ProfileUser): Observable<any> {
      const ref = doc(this.firestore, 'CommunityProfile', user?.uid);
    return from(setDoc(ref, user));
  }


//This method references the data from 'users' collection in firebase.
  get currentUserProfile$(): Observable<any> {
    return this.authService.currentUser$.pipe(
      switchMap((user) => {
        if (!user?.uid) {
          return of(null);
        }
          const ref = doc(this.firestore, 'users', user?.uid); //This will automatically return the users data from collection 'users' will not be able to update username or uid. 
      return docData(ref) as Observable<ProfileUser>;
      })
    );
  } 

//This method references the data from 'CommunityProfile' collection in firebase.
  get currentUserPage$(): Observable<any> {
    return this.authService.currentUser$.pipe(
      switchMap((user) => {
        if (!user?.uid) {
          return of(null);
        }
        const ref = doc(this.firestore, 'CommunityProfile', user?.uid); //This will automatically return the users data from collection 'users' will not be able to update username or uid. 
        return docData(ref) as Observable<ProfileUser>;
      })
    );
  }
}
