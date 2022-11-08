import { Component, OnInit } from '@angular/core'; 
import { FormControl } from '@angular/forms';
import { UsersService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-my-inbox',
  templateUrl: './my-inbox.component.html',
  styleUrls: ['./my-inbox.component.css']

})



export class MyInboxComponent implements OnInit {

  user$ = this.userService.currentUserProfile$;

  users$ = this.userService.allUsers$;

  searchControl = new FormControl('');

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

}
