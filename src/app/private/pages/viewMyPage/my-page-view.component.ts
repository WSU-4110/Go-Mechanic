import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/services/posts.service';
import { UsersService } from 'src/app/core/services/user.service';
import { AuthenticationService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-my-page-view',
  templateUrl: './my-page-view.component.html',
  styleUrls: ['./my-page-view.component.css']
})
export class MyPageViewComponent implements OnInit {
  user$ = this.postsService.currentUserPage$; 
  userAuth$ = this.authService.currentUser$;

  constructor(private postsService: PostsService, private usersService: UsersService,private authService : AuthenticationService,) { }

  ngOnInit(): void {
  }

}
