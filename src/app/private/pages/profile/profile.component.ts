import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { User } from 'firebase/auth';
import { concatMap, switchMap } from 'rxjs';
import { AuthenticationService } from 'src/app/core/auth/auth.service';
import { ImageUploadService } from 'src/app/core/services/image-upload.service';
import { ProfileUser } from 'src/app/models/user-profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user$ = this.authService.currentUser$;


  constructor(private authService : AuthenticationService, private imageUploadService: ImageUploadService, private toast: HotToastService) { }

  ngOnInit(): void {
  }

  uploadImage(event: any, user: User) {
    this.imageUploadService.uploadImage(event.target.files[0], `images/profile/${user.uid}`).pipe( ///Error Was string literal for user id
      this.toast.observe({
        loading: 'uploading Image...',
        success: 'profile updated',
        error: 'there was an error uploading',
      }),
      concatMap((photoURL) => this.authService.updateProfileData(({ photoURL })))
      ).subscribe();
    }
  }
