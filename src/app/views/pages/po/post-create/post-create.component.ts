import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../../shared/services/auth.service";
import { ToastrService } from "src/app/shared/services/toastr.service";
import { FormControl, FormGroup, NgForm, Validators, ReactiveFormsModule } from "@angular/forms";
import { PostsService } from "src/app/shared/services/posts.service";
import { Post } from "src/app/shared/models/interfaces";
import { User } from "src/app/shared/models/user";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.scss"],
})
export class PostCreateComponent implements OnInit {
  loading = false;
 
  form: FormGroup;
  user: User;
  page = 1;
  dop = false;


  constructor(
    public authService: AuthService,
    private toastrService: ToastrService,
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      attention: new FormControl(null),
    });
  }
  getAllPosts(){
    
  }

  
  submit() {
    
    if (this.form.invalid) {
      return;
    }
    const post: Post = {
      title: this.form.value.title,
      // author: this.form.value.author,
      text: this.form.value.text,
      date: new Date(),
      attention: this.form.value.attention,
      approved: this.dop,
      sherpas: false
    };
    if(post.attention == null)
    post.attention = false;
    this.postsService.create(post).subscribe(() => {
      this.form.reset();
      this.router.navigate(["/"]);
    });
    console.log(post);
    
  }
}
