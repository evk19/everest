import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class ClimberGaurd implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate() {
    if (this.authService.isLoggedIn$ && this.authService.isClimber$) {
      console.log(this.authService.isLoggedIn$);
      return true;
    }
    else {
      this.router.navigate(["/login"]);
    return false;}
  }
}
