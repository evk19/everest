import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
import { NoAccessComponent } from "./shared/components/no-access/no-access.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./views/base/index/index.module").then((m) => m.IndexModule),
      },
      {
        path: "products",
        loadChildren: () =>
          import("./views/pages/po/product.module").then(
            (m) => m.ProductModule
          ),
      },
      {
        path: "users",
        loadChildren: () =>
          import("./views/pages/user/user.module").then((m) => m.UserModule),
      },
    ],
  },
  { path: "no-access", component: NoAccessComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
