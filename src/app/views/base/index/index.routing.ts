import { LoginComponent } from "./login/login.component";
import { Routes } from "@angular/router";
import { IndexComponent } from "./index.component";
import { NoaccessComponent } from "./access/noaccess/noaccess.component";
import { AllUsersComponent } from "../../pages/po/all-users/all-users.component";
import { AdminGaurd } from "src/app/shared/services/admin-gaurd";

export const IndexRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: IndexComponent,
      },
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "noaccess",
        component: NoaccessComponent,
      },
     

    ],
  },
];
