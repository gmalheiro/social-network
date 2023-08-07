import { Component, EventEmitter, Output } from '@angular/core';
import { UserModel  } from './user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Output() userWasSelected = new EventEmitter<UserModel>();
  users: UserModel[] = [
    new UserModel('John Doe','john@email.com','https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'),
    new UserModel('Mary Anne','mary@email.com','https://images.unsplash.com/photo-1483381616603-8dde934da56f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80')
  ]

  onUserSelected(user:UserModel){
    this.userWasSelected.emit(user);
  }

}
