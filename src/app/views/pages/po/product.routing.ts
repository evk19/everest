import { IndexComponent } from "../../base/index/index.component";
import { PostCreateComponent } from "./post-create/post-create.component";
import { Routes } from "@angular/router";

import { PostEditComponent } from "./post-edit/post-edit.component";
import { AdminGaurd } from "src/app/shared/services/admin-gaurd";
import { AuthGuard } from "src/app/shared/services/auth_gaurd";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { AllUsersComponent } from "./all-users/all-users.component";
import { SherpaGaurd } from "src/app/shared/services/sherpa-guard";

export const ProductRoutes: Routes = [
  {
    path: "products",
    children: [
      {
        path: "",
        component: IndexComponent,
      },
      {
        path: "all-products",
        component: PostCreateComponent,
      },
      {
        path: "post/:id/edit",
        component: PostEditComponent, canActivate:[AdminGaurd]
      },
      {
        path: "post/:id",
        component: PostDetailComponent,
      },
      {
        path: "all",
        component: AllUsersComponent, canActivate:[AdminGaurd]
      }
      
    ],
  },
];
