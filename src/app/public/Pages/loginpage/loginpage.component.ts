import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { AuthenticationService } from 'src/app/core/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})

export class LoginpageComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private fb: NonNullableFormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    const { email, password } = this.loginForm.value;

    if (!this.loginForm.valid || !email || !password) {
      return;
    }

    this.authService.login(email, password)
  }

  signup(){
    this.dialog.closeAll();
    this.dialog.open(SignupComponent);
  }
}

