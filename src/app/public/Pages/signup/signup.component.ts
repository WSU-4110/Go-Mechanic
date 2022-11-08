import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/auth/auth.service';


export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsDontMatch: true };
    } else {
      return null;
    }
  };
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
    signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required)
  },
  { validators: passwordsMatchValidator() }) //Cross fields validation
  constructor(private authService: AuthenticationService,private toast: HotToastService, private router: Router) { }

  ngOnInit(): void {}

  get name() {
    return this.signUpForm.get('name');
   
  }
  
  get email(){
  return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  submit() {
    const { name, email, password } = this.signUpForm.value;

    if (!this.signUpForm.valid || !name || !password || !email) {
      return;
    }
    this.authService.signUp(name, email, password).pipe(
        this.toast.observe({
          success: 'Sign up successful!',
          loading: 'loading...',
          error: ({ message }) => `${message}`,
        })
    ).subscribe(() => {
      this.router.navigate(['/home']);
    })
  }
}
