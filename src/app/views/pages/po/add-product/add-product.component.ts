import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, NgForm, Validators, ReactiveFormsModule } from "@angular/forms";
import { PostsService } from "src/app/shared/services/posts.service";
import { Post } from "src/app/shared/models/interfaces";




@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"],
})
export class AddProductComponent implements OnInit {

  form: FormGroup;
  constructor(
    private postsService: PostsService
    ) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
    });
  }

  
  submit() {
    if (this.form.invalid) {
      return;
    }
    const post: Post = {
      title: this.form.value.title,
      author: this.form.value.author,
      text: this.form.value.text,
      date: new Date()
    };
    this.postsService.create(post).subscribe(() => {
      this.form.reset();
    });
    console.log(post);
  }

}
