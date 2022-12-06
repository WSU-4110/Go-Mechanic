import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/auth/auth.service';
import { UsersService } from '../services/user.service';
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
  
    ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }
}
