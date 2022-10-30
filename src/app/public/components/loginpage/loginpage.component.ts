import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
<<<<<<< HEAD
import { AuthService } from 'src/app/core/auth/auth.service';
=======
import { AuthenticationService } from 'src/app/core/auth/auth.service';
>>>>>>> 9ea170d17660b138e5eb9b82859c09694cd3a66e

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
<<<<<<< HEAD
    private authService: AuthService,
=======
    private authService: AuthenticationService,
>>>>>>> 9ea170d17660b138e5eb9b82859c09694cd3a66e
    private toast: HotToastService,
    private router: Router,
    private fb: NonNullableFormBuilder
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

    this.authService
      .login(email, password).pipe(this.toast.observe({
          success: 'Logged in successfully',
          loading: 'Logging in...',
          error: 'Incorrect username or password',
        })
      )
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }
}
