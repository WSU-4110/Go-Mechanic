import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { User } from 'firebase/auth';
import { concatMap, from, Observable, of, switchMap } from 'rxjs';
import { AuthenticationService } from 'src/app/core/auth/auth.service';
import { ImageUploadService } from 'src/app/core/services/image-upload.service';
import { UsersService } from 'src/app/core/services/user.service';

import { PostsService } from 'src/app/core/services/posts.service';
import { ProfileUser } from 'src/app/models/user-profile';
import { doc, setDoc } from 'firebase/firestore';
import { docData, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {
  user$ = this.postsService.currentUserProfile$;
  userAuth$ = this.authService.currentUser$;

  CommunityProfileForm = new FormGroup({
    uid: new FormControl('', {
      nonNullable: true,
    }),
    displayName: new FormControl('', {
      nonNullable: true,
    }),
    firstName: new FormControl('', {
      nonNullable: true,
    }),
    description: new FormControl('', {
      nonNullable: true,
    }),
    experience: new FormControl('', {
      nonNullable: true,
    }),
    zip: new FormControl('', {
      nonNullable: true,
    }),
    city: new FormControl('', {
      nonNullable: true,
    }),
  });


  constructor(
    private authService : AuthenticationService, 
    private imageUploadService: ImageUploadService, 
    private toast: HotToastService,
    private usersService: UsersService,
    private postsService: PostsService,
    
    ) { }

  ngOnInit(): void {
    this.postsService.currentUserProfile$
      //.pipe(untilDestroyed(this)
      .subscribe((user) => {
        this.CommunityProfileForm.patchValue({ ...user });
      });
    }

    uploadImage(event: any, user: User) {
      this.imageUploadService.uploadImage(event.target.files[0], `images/profile/${user.uid}`).pipe(
        this.toast.observe({
          loading: 'Uploading Proflile Image...',
          success: 'Profile Image Uploaded Successfully',
          error: 'There was an error uploading',
        }),
        concatMap((photoURL) => this.authService.updateProfileData(({ photoURL })))
        ).subscribe();
      }

  savePublicProfile() {
    const {uid, ...data} = this.CommunityProfileForm.value;

    if (!uid) {
      return; /* Error message portion if UID is undefined for whatever reason. - Anthony */
    }

    this.postsService.createPublicProfile({
      uid, ...data,
      role: 'user'
    }).pipe(this.toast.observe({
      success: 'Your profile was updated',
      error: 'There was an error in updating the data.'
    })).subscribe();
  }

    
}