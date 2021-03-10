import { Component, OnInit,Input } from '@angular/core';
import { Post } from 'src/app/shared/models/interfaces';
import { User } from 'src/app/shared/models/user';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post
  @Input() user: User
  constructor(
    private postService: PostsService,
  ) {
   }

  ngOnInit(): void {
    
  }

}
