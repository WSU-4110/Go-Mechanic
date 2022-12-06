import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/services/posts.service';
import { UsersService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-my-page-view',
  templateUrl: './my-page-view.component.html',
  styleUrls: ['./my-page-view.component.css']
})
export class MyPageViewComponent implements OnInit {
  user$ = this.postsService.currentUserPage$; //From posts collections in fb.
  user1$ = this.postsService.currentUserProfile$;

  constructor(private postsService: PostsService, private usersService: UsersService) { }

  ngOnInit(): void {
  }

}
