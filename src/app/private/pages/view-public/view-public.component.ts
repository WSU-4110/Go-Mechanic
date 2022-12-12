import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, map, of, startWith, switchMap } from 'rxjs';
import { UsersService } from 'src/app/core/services/user.service';
import { AuthenticationService } from 'src/app/core/services/auth/auth.service';
import { MyInboxComponent } from '../myInbox/my-inbox.component';
import { ChatService } from 'src/app/core/services/Chat/chat.service';
import { ProfileUser } from 'src/app/models/user-profile';

@Component({
  selector: 'app-view-public',
  templateUrl: './view-public.component.html',
  styleUrls: ['./view-public.component.css']
})

export class ViewPublicComponent implements OnInit {
users: any;
searchControl = new FormControl('');

userAuth$ = this.authService.currentUser$;
user$ = this.usersService.currentUserProfile$;

users$ = combineLatest([this.usersService.allUsers$, this.user$, this.searchControl.valueChanges.pipe(startWith(''))]).pipe(
  map(([users, user, searchString]) => users.filter(u => u.displayName?.toLowerCase().includes(searchString?.toLowerCase() ?? '' ) && u.uid !== user?.uid))
);

  constructor(public usersService: UsersService, public authService: AuthenticationService, public chatsService: ChatService) {
  }

  
  ngOnInit(): void {
  }

  //should redirect user to inbox with created selected chat.
  createChat(otherUser: ProfileUser) {
    this.chatsService.isExistingChat(otherUser.uid).pipe(
      switchMap(chatId => {
        if (chatId) {
          return of(chatId);
        } else{
          return this.chatsService.createChat(otherUser);
        }
      })
    ).subscribe((chatId) => {
      this.searchControl.setValue(chatId); //We should redirerct to the current user chat if one is already created, function is block for now
    })
  }

}
