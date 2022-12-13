import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest, map, of, startWith, switchMap } from 'rxjs';
import { UsersService } from 'src/app/core/services/user.service';
import { AuthenticationService } from 'src/app/core/services/auth/auth.service';
import { ChatService } from 'src/app/core/services/Chat/chat.service';
import { ProfileUser } from 'src/app/models/user-profile';
import { HotToastService } from '@ngneat/hot-toast';
@Component({
  selector: 'app-view-public',
  templateUrl: './view-public.component.html',
  styleUrls: ['./view-public.component.css']
})

export class ViewPublicComponent implements OnInit {
users: any;
searchControl = new FormControl('');
reviewControl = new FormControl('');

userAuth$ = this.authService.currentUser$;
user$ = this.usersService.currentUserProfile$;


users$ = combineLatest([this.usersService.allUsers$, this.user$, this.searchControl.valueChanges.pipe(startWith(''))]).pipe(
  map(([users, user, searchString]) => users.filter(u => u.displayName?.toLowerCase().includes(searchString?.toLowerCase() ?? '' ) && u.uid !== user?.uid))
);




  constructor(
    public usersService: UsersService, 
    public authService: AuthenticationService, 
    public chatsService: ChatService,
    public toast : HotToastService,
    ) {}

  ngOnInit(): void {}

  applyReview = new FormGroup({
    uid: new FormControl('', {
      nonNullable: true,
    }),//
    description: new FormControl('', {
      nonNullable: true,
    }),
    experience: new FormControl('', {
      nonNullable: true,
    }),
    zip: new FormControl('', {
      nonNullable: true,
    }),
    city: new FormControl('', {
      nonNullable: true,
    }),
    reviews: new FormControl('', {
      nonNullable: true,
    }),
  });

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
  //This component is used to publish a review to a users page
  publishReview(otherUser: ProfileUser){
    const refReview = this.usersService.currentUserProfile$;
    const applyReview = this.reviewControl.value;
  
    if (refReview && applyReview){
      this.usersService.createReview(otherUser, applyReview).pipe(
        this.toast.observe({
          success: 'Your review was published successfully',
          error: 'There was an error uploading',
          
        }),).subscribe(); 
    }
    console.log("The 'publishReview' button has been clicked and sent the data to Database via 'personalReviews' collection inside 'user' document");
  }
}
