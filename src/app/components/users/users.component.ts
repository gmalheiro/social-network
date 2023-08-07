import { Component } from '@angular/core';
import { UserModel } from './user-list/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  selectedUser:UserModel;

}
