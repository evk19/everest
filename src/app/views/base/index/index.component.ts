import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../shared/services/auth.service";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
  constructor(
    public authService: AuthService,
  ) {}

  ngOnInit() {}
}
