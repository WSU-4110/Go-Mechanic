import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/auth/auth.service';
import { UsersService } from '../services/user.service';
import {MatDialog} from '@angular/material/dialog';
import { SignupComponent } from 'src/app/public/Pages/signup/signup.component';
import { LoginpageComponent } from 'src/app/public/Pages/loginpage/loginpage.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user$ = this.userService.currentUserProfile$;

  constructor(
    public authService: AuthenticationService,
    public userService: UsersService,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

  openSignUp(){
    this.dialog.open(SignupComponent);
  }

  openLogin(){
    this.dialog.open(LoginpageComponent);
  }
  
}
