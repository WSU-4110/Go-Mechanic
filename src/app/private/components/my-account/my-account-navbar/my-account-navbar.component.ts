import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-my-account-navbar',
  templateUrl: './my-account-navbar.component.html',
  styleUrls: ['./my-account-navbar.component.css']
})

export class MyAccountNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
