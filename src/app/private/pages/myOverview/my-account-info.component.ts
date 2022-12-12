import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { User } from 'firebase/auth';
import {MatDialog} from '@angular/material/dialog';
import { AddCarDialogComponent } from '../add-car-dialog/add-car-dialog.component';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { concatMap } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/auth/auth.service';
import { ImageUploadService } from 'src/app/core/services/ImageUpload/image-upload.service';
import { UsersService } from 'src/app/core/services/user.service';


@Component({
  selector: 'app-my-account-info',
  templateUrl: './my-account-info.component.html',
  styleUrls: ['./my-account-info.component.css']
})


export class MyAccountInfoComponent implements OnInit {
  currentUser$ = this.authService.currentUser$;
  userProfile$ = this.usersService.currentUserProfile$;

  //Standard Profile form for user profile, based off models/user-profile - [Joseph]
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

  constructor(
    private authService : AuthenticationService, 
    private imageUploadService: ImageUploadService, 
    private toast: HotToastService,
    private usersService: UsersService,
    public dialog: MatDialog,
    private firestone: Firestore
    ) { }

  ngOnInit(): void {
    this.usersService.currentUserProfile$
      //.pipe(untilDestroyed(this)
      .subscribe((user) => {
        this.profileForm.patchValue({ ...user });
      });
  }
  
  //From auth service... - [Joseph]
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

  //Saves to 'users' collection firestore and verifies role...needs refractoring in my opinion - [Joseph]
  saveProfile(){  
      const {uid, ...data} = this.profileForm.value;
      
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
    this.dialog.open(AddCarDialogComponent);
  }
}