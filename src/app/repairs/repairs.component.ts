import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from "../core/services/user.service";
import {collection, Firestore} from "@angular/fire/firestore";
import {ProfileUser} from "../models/user-profile";
import {map, Observable} from "rxjs";
import {user} from "@angular/fire/auth";
import {AuthenticationService} from "../core/services/auth/auth.service";


@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.css']
})
export class RepairsComponent implements OnInit {
  Users: ProfileUser[] | any;
  private userType: UsersService = new UsersService(this.firestore, this.authService);

  constructor(private firestore: Firestore, private userService: UsersService, private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.createList();
    console.log("UsersUpdated");
    console.log(this.Users);
  }

  createList() {
    let userList = this.userType.allUsers$.subscribe(user => {
      let nextUser = user as ProfileUser[];
      console.log("nextUser");
      console.log(nextUser);
      this.Users = nextUser;
    });
  }
}
