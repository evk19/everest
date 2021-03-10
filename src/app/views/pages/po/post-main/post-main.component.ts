import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "src/app/shared/models/interfaces";
import { PostsService } from "src/app/shared/services/posts.service";
import { ToastrService } from "src/app/shared/services/toastr.service";
import {SearchPipe} from "../../../../shared/pipes/search.pipe"
import { AuthService } from "../../../../shared/services/auth.service";
import {FilterByAlertPipe} from "../../../../shared/pipes/filter-by-alert.pipe"


@Component({
  selector: "app-best-product",
  templateUrl: "./post-main.component.html",
  styleUrls: ["./post-main.component.scss"],
})
export class PostMainComponent implements OnInit {
  options: any;
  loading = false;
  postTypes = ["All", "Attention", "Regular"];
  selectedType = "All"

  posts: Post[] = [];
  pSub: Subscription;
  dSub: Subscription;
  searchStr = '';
  posts$: null;
  search = ''

  constructor(
    private postsService: PostsService,
    private toasterService: ToastrService,
    public authService: AuthService,

  ) {}

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
    this.pSub = this.postsService.getAll().subscribe(posts =>{
      this.posts = posts;
    });
  }




  remove(id: string) {
    this.dSub = this.postsService.remove(id).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== id);
      
    });
  }
  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  if (this.dSub) {
    this.dSub.unsubscribe();
  }
}

}
