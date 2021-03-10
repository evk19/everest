import { Component, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { AuthService } from "../../../../shared/services/auth.service";
import {ClientsService} from "../../../../shared/services/clients.service"

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
  clients: User[] = [];
  // client: any;
  pSub: Subscription;
  uSub: Subscription;
  user: User
  constructor(public authService: AuthService,
    private clientsService: ClientsService,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.pSub = this.clientsService.getAll().subscribe(user =>{
      this.clients = user;
      
    });
  }
  // sherpa(id){
  //   this.pSub = this.clientsService.getById(id).subscribe(user =>{
  //     this.client = user;
  //     console.log(this.client)
  //   });
  //   console.log(this.client.isSherpa)

  // }
  transform_toClimber(){
    
  }
  transform_toSherpa(){
   
  }

}
