import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { from, Observable, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Post } from 'src/app/shared/models/interfaces';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CommentService } from 'src/app/shared/services/comment.service';
import { PostsService } from 'src/app/shared/services/posts.service';
import {CommentSh} from '../../../../shared/models/interfaces'
import {FilterCommentPipe} from '../../../../shared/pipes/filterComment.pipe'
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post$: Observable<Post>
  submitted = false;
  constructor(
    private postService: PostsService,
    private route: ActivatedRoute,
    public authService: AuthService,
    private commentService: CommentService,
    private router: Router,
  ) { 
 
  }
  x: any;
  uSub: Subscription;
  pSub: Subscription;
  post: Post;
  form: FormGroup;
  comment: CommentSh[] = [];
  postId: any;
  options: any;
  loading = false;
  ngOnInit() {
    this.options = {
      dots: false,
      responsive: {
        0: { items: 1, margin: 5 },
        430: { items: 2, margin: 5 },
        550: { items: 3, margin: 5 },
        670: { items: 4, margin: 5 },
      },
      autoplay: true,
      loop: true,
      autoplayTimeout: 3000,
      lazyLoad: true,
    };
    this.loading = true;
    this.post$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.x = this.postService.getById(params['id'])
      }))
      this.route.params.pipe(
        switchMap((params: Params) => {
          return this.postService.getById(params['id']);
        })
      ).subscribe((post:Post) => {
        this.post = post;
      });
      this.form = new FormGroup({
        text: new FormControl(null, Validators.required),
      });
      this.pSub = this.commentService.getAll().subscribe(comments =>{
        this.loading = false;
        this.comment = comments;
      });
  }
start(){
  this.uSub = this.postService.update({
    ...this.post,
    sherpas: true,
  })
  .subscribe(() => {
    this.loading = false;
  this.submitted = false;
  })
  this.router.navigate(["/"]);
}

end(){
  this.uSub = this.postService.update({
    ...this.post,
    solved: true,
    sherpas: false
  })
  .subscribe(() => {
    this.submitted = false;
    })
    this.router.navigate(["/"]);
}

getAllComments(){
  
}

submit() {
    
  if (this.form.invalid) {
    return;
  }
  const comment: CommentSh = {
    text: this.form.value.text,
    postId: this.post.id
  };
  this.commentService.create(comment).subscribe(() => {
    this.form.reset();
    this.router.navigate(["/"]);
  });
  
}



}