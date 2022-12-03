import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { User } from 'firebase/auth';
import { concatMap, switchMap } from 'rxjs';
import { AuthenticationService } from 'src/app/core/auth/auth.service';
import { ImageUploadService } from 'src/app/core/services/image-upload.service';
import { UsersService } from 'src/app/core/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user$ = this.authService.currentUser$;

  profileForm = new FormGroup({
    uid: new FormControl('', {
      nonNullable: true,
    }),
    displayName: new FormControl('', {
      nonNullable: true,
    }),
    firstName: new FormControl('', {
      nonNullable: true,
    }),
    lastName: new FormControl('', {
      nonNullable: true,
    }),
    phone: new FormControl('', {
      nonNullable: true,
    }),
    address: new FormControl('', {
      nonNullable: true,
    }),
  });


  constructor(
    private authService : AuthenticationService, 
    private imageUploadService: ImageUploadService, 
    private toast: HotToastService,
    private usersService: UsersService,
    ) { }

  ngOnInit(): void {
    this.usersService.currentUserProfile$
      //.pipe(untilDestroyed(this)
      .subscribe((user) => {
        this.profileForm.patchValue({ ...user });
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

    saveProfile(){  
      const {uid, ...data} = this.profileForm.value;

      if (!uid) {
        return; /* Error message portion if UID is undefined for whatever reason. - Anthony */
      }

      this.usersService.updateUser({uid, ...data})
      .pipe(this.toast.observe({
        loading: 'Updating data...',
        success: 'Data has been successfully updated!',
        error: 'There was an error in updating the data.'
      })
      )
      .subscribe();
    }

}