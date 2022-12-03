import { Component, OnInit } from '@angular/core'; 
import { FormControl } from '@angular/forms';

import { combineLatest, map, startWith } from 'rxjs';
import { UsersService } from 'src/app/core/services/user.service';
import { ProfileUser } from 'src/app/models/user-profile';
import { ChatService } from 'src/app/core/services/chat.service';
import { provideProtractorTestingSupport } from '@angular/platform-browser';

import { combineLatest, map, startWith, switchMap } from 'rxjs';
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
  chatListControl = new FormControl('');
  messageControl = new FormControl('');


  users$ = combineLatest([this.userService.allUsers$, this.user$, this.searchControl.valueChanges.pipe(startWith(''))]).pipe(
    map(([users, user, searchString]) => users.filter(u => u.displayName?.toLowerCase().includes(searchString?.toLowerCase() ?? '' ) && u.uid !== user?.uid))
  );

  myChats$= this.chatsService.myChats$;

  selectedChat$ = combineLatest([this.chatListControl.valueChanges,this.myChats$]).pipe(map(([value,chats]) => chats.find(c=>c.id === value[0])) //null exception
  )

  messages$ = this.chatListControl.valueChanges.pipe(map(value => value[0]),
  switchMap(chatId => this.chatsService.getChatMessages$(chatId))
  )



  users$ = combineLatest([this.userService.allUsers$, this.user$, this.searchControl.valueChanges.pipe(startWith(''))]).pipe(
    map(([users, user, searchString]) => users.filter(u => u.displayName?.toLowerCase().includes(searchString?.toLowerCase() ?? '' ) && u.uid !== user?.uid))
  );

  myChats$= this.chatsService.myChats$;



  constructor(private userService: UsersService, private chatsService: ChatService) { }

  ngOnInit(): void {
  }

  createChat(otherUser: ProfileUser) {
    this.chatsService.createChat(otherUser).subscribe();

  }

  sendMessage(){
    const message = this.messageControl.value;
    const selectedChatId = this.chatListControl.value[0]; //null exception

    if (message && selectedChatId){
      this.chatsService.addChatMessage(selectedChatId, message).subscribe();
      this.messageControl.setValue('')
    }
  }


}
