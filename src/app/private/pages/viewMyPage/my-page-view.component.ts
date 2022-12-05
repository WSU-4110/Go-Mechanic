import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'app-my-page-view',
  templateUrl: './my-page-view.component.html',
  styleUrls: ['./my-page-view.component.css']
})
export class MyPageViewComponent implements OnInit {
  user$ = this.postsService.currentUserProfile$;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

}
