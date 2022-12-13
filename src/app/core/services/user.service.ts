import { Injectable } from '@angular/core';
import {addDoc, collection, collectionData, doc, docData, Firestore, orderBy, query, setDoc, Timestamp, updateDoc, where,} from '@angular/fire/firestore';
import { concatMap, from, map, Observable, of, switchMap, take } from 'rxjs';
import { ProfileUser } from 'src/app/models/user-profile';
import { AuthenticationService } from './auth/auth.service';


@Injectable({
  providedIn: 'root'
})

export class UsersService {
  
  get currentUserProfile$(): Observable<ProfileUser | null> {
    return this.authService.currentUser$.pipe(
      switchMap((user) => {
        if (!user?.uid) { return of(null); }
        const ref = doc(this.firestore, 'users', user?.uid);
        return docData(ref) as Observable<ProfileUser>;
      })
    );
  }

  get allUsers$(): Observable<ProfileUser[]> {
    const ref = collection(this.firestore, 'users');
    const queryAll = query(ref);
    return collectionData(queryAll) as Observable<ProfileUser[]>;
  }

  constructor(
    private firestore: Firestore,
    private authService: AuthenticationService,

    ){}

    addUser(user: ProfileUser): Observable<any> {
      const ref = doc(this.firestore, 'users', user?.uid);
      return from(setDoc(ref, user,));
    }
  
    updateUser(user: ProfileUser): Observable<any> {
      const ref = doc(this.firestore, 'users', user?.uid);
      return from(updateDoc(ref, { ...user }));
    }
    

    addReview(reviewerId: string, message: string) : Observable<any> {
      const ref = collection(this.firestore, 'users', reviewerId, 'reviews');
      const postRef = doc(this.firestore, 'users', reviewerId);
      const today = Timestamp.fromDate(new Date());
      return this.currentUserProfile$.pipe(
        take(1),
        concatMap((user) => addDoc(ref, {
          text: message,
          reviewerId: user?.uid,
          sentDate: today
        })),
        concatMap(() => updateDoc(postRef, { lastMessage: message, lastMessageDate: today} ))
      )
      }

      

      createReview(otherUser: ProfileUser, review: string): Observable<any> {
        const ref = collection(this.firestore, 'users', otherUser?.uid, 'personalReviews');
        const postRef = doc(this.firestore, 'users', otherUser?.uid);
        return this.currentUserProfile$.pipe(
        take(1),
        concatMap((user) =>
        addDoc(ref, {
          Victim: [otherUser?.uid, otherUser?.displayName],
          Reviewer: [
            {
              UserUid: user?.uid,
              Displayname: user?.displayName,
              ReviewText: review,
            },
          ],
        })
      ),
      concatMap(() => updateDoc(postRef, { lastReview: review}))
    );
  }



  getReviews$(UserUid: string): Observable<ProfileUser[]>{
    const ref = collection(this.firestore, 'users', UserUid, 'personalReviews');
    const queryAll = query(ref, orderBy('sentDate', 'asc'));
    return collectionData(queryAll) as Observable<ProfileUser[]>;
    }

  }
  
