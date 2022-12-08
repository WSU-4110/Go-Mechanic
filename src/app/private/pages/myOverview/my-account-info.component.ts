import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ProfileUser } from 'src/app/models/user-profile';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FormControl, FormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { User } from 'firebase/auth';
import { concatMap, switchMap } from 'rxjs';
import { AuthenticationService } from 'src/app/core/auth/auth.service';
import { ImageUploadService } from 'src/app/core/services/image-upload.service';
import { UsersService } from 'src/app/core/services/user.service';
import { PostsService } from 'src/app/core/services/posts.service';

  //Code for the new dropdown menu to select account type - Anthony
  interface Account {
    value: string;
    viewValue: string;
  }

@Component({
  selector: 'app-my-account-info',
  templateUrl: './my-account-info.component.html',
  styleUrls: ['./my-account-info.component.css']
})


export class MyAccountInfoComponent implements OnInit {

  //Code related to the new account select dropdown - Anthony
  accounts: Account[] = [
    {value: 'customer-0', viewValue: 'Customer'},
    {value: 'contractor-1', viewValue: 'Contractor'}
  ];

  user$ = this.authService.currentUser$;
  userProf$ = this.postsService.currentUserProfile$;

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
    role: new FormControl('', {
      nonNullable: true,
    }),
    address: new FormControl('', {
      nonNullable: true,
    }),
    description: new FormControl('', {
      nonNullable: true,
    }),
    zip: new FormControl('', {
      nonNullable: true,
    }),
  });

  //Testing duo update in firebase
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
    role: new FormControl('', {
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

  //Saves to 'users' collection firestore and verifies role...needs refractoring
  saveProfile(){  
      const {uid, ...data} = this.profileForm.value;
      
      //This checks if a user already has a 'mechanic role', if not it will continue with saveCommunityProfile method.
      if(this.profileForm.value.role === 'mechanic'){
        if (!uid) { return;}
        this.usersService.updateUser({uid, ...data, role: 'mechanic' })
        .pipe(this.toast.observe({
          success: 'Mechanic profiles have been updated',
          error: 'There was an error in updating the data.'
        })
        )
        .subscribe();
      }
      else{
        if (!uid) { return; }
      this.usersService.updateUser({
        uid, ...data,
        role: 'user'
      })
      .pipe(this.toast.observe({
        success: 'Profiles have been successfully updated',
        error: 'There was an error in updating the data.'
      })
      )
      .subscribe();
    }
  }


//Code for the new dropdown menu to select account type - Anthony
  // Function I created in order to allow me to change tabs within the side-nav bar instead of using page components. This took forever! - Anthony
  openSideNav(event: any, tabName: string) {
    var i, x, sideNavLinks;
    x = document.getElementsByClassName("menu-content") as HTMLCollectionOf<HTMLElement>;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    sideNavLinks = document.getElementsByClassName("menu-item");
    for (i = 0; i < x.length; i++) {
      sideNavLinks[i].className = sideNavLinks[i].className.replace(" is-active", "");
    }
      document.getElementById(tabName)!.style.display = "block";
      event.currentTarget.className += " is-active";
  }


  addCar(){
    //Placeholder for now
  }
}