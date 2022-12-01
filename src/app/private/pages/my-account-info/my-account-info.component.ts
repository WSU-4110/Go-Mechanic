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

}
