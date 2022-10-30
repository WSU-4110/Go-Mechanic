import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { AuthService } from 'src/app/core/auth/auth.service';
=======
import { AuthenticationService } from 'src/app/core/auth/auth.service';
>>>>>>> 9ea170d17660b138e5eb9b82859c09694cd3a66e

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
<<<<<<< HEAD
    public authService: AuthService,
=======
    public authService: AuthenticationService,
>>>>>>> 9ea170d17660b138e5eb9b82859c09694cd3a66e
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
