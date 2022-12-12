import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/auth/auth.service';
import { UsersService } from 'src/app/core/services/user.service';
import { switchMap, timeInterval } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';
import { MatDialog } from '@angular/material/dialog';


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
  { validators: passwordsMatchValidator() }) 

  constructor(private authService: AuthenticationService,
    private toast: HotToastService, 
    private  userService: UsersService,
    public dialog: MatDialog) { }

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

    this.authService.signUp(email, password).pipe(
      switchMap(({ user: {uid} }) => this.userService.addUser({
        uid, email, displayName: name,
        role: 'user'
      })),
        this.toast.observe({
          error: ({ message }) => `${message}`, // [jsb] - I've deleted the notification on successful login, (furthering jims bug)
        }),
    )
    .subscribe(() => {
      this.authService.closePopUps();
      this.authService.forceLogout();
      this.authService.SendVerificationMail();
    })
  }
}