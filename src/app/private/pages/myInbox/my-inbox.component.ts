import { Component, OnInit } from '@angular/core'; 
import { FormControl } from '@angular/forms';
import { combineLatest, map, startWith } from 'rxjs';
import { UsersService } from 'src/app/core/services/user.service';
import { ProfileUser } from 'src/app/models/user-profile';
import { ChatService } from 'src/app/core/services/chat.service';

@Component({
  selector: 'app-my-inbox',
  templateUrl: './my-inbox.component.html',
  styleUrls: ['./my-inbox.component.css']

})



export class MyInboxComponent implements OnInit {

  user$ = this.userService.currentUserProfile$;

  searchControl = new FormControl('');

  users$ = combineLatest([this.userService.allUsers$, this.user$, this.searchControl.valueChanges.pipe(startWith(''))]).pipe(
    map(([users, user, searchString]) => users.filter(u => u.displayName?.toLowerCase().includes(searchString.toLowerCase()) && u.uid !== user?.uid)) //ref comment. tsconfig.json
  );

  

  constructor(private userService: UsersService, private chatsService: ChatService) { }

  ngOnInit(): void {
  }

  createChat(otherUser: ProfileUser) {
    this.chatsService.createChat(otherUser).subscribe();

  }

}
