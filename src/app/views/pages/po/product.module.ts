// Core Dependencies
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ProductRoutes } from "./product.routing";



import { ProductComponent } from "./product.component";
import { PostMainComponent } from "./post-main/post-main.component";
import { PostCreateComponent} from "./post-create/post-create.component";
import { SharedModule } from "../../../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import {SearchPipe} from "../../../shared/pipes/search.pipe";
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostComponent } from "./postc/post/post.component";
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AllUsersComponent } from './all-users/all-users.component'
import { AdminGaurd } from "src/app/shared/services/admin-gaurd";
import { FilterCommentPipe } from "src/app/shared/pipes/filterComment.pipe";
import { FilterByAlertPipe } from "src/app/shared/pipes/filter-by-alert.pipe";
import { AddProductComponent } from "./add-product/add-product.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProductRoutes),
    SharedModule,
    ReactiveFormsModule,
    
  ],
  declarations: [
    ProductComponent,
    PostMainComponent,
    PostCreateComponent,
    PostEditComponent,
    PostComponent,
    SearchPipe,
    PostDetailComponent,
    AllUsersComponent,
    FilterCommentPipe,
    FilterByAlertPipe,
    AddProductComponent
  ],
  exports: [PostMainComponent],
})
export class ProductModule {}
