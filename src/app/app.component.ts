import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/auth/auth.service';
import { UsersService } from 'src/app/core/services/user.service';


/** templateUrl: './app.component.html', */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  
  user$= this.userService.currentUserProfile$;
  
constructor(
  private AuthService: AuthenticationService,
  private router: Router,
  private userService: UsersService
){}

  title = 'GoMechanicDev';
  
}