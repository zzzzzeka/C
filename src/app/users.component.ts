import {Component, OnInit} from "@angular/core";
import {User} from "./model/user";
import {UserService} from "./services/user.service";
@Component({
    selector: 'users',
    templateUrl: 'users.component.html'
  }
)
export class UsersComponent {
  public users: User[];

  constructor(private  userService: UserService) {
    this.users = this.userService.getAllUsers();
  }
}
