import { Component } from '@angular/core';
import { User } from 'src/app/models/user-model';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  users: User[] = [
    new User('John','john@email.com'),
    new User('Mary','mary@email.com'),
  ]

  onUserAdded(user: User) {
    this.users.push(user);
  }

}
