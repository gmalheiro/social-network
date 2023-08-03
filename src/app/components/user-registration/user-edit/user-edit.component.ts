import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user-model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  @ViewChild('inputName', { static: true }) inputName: ElementRef;
  @ViewChild('inputEmail', { static: true }) inputEmail: ElementRef;
  @Output() userAdded = new EventEmitter<User>();

  onUserAdded() {
    const userName = this.inputName.nativeElement.value;
    const userEmail = this.inputEmail.nativeElement.value;
    this.userAdded.emit(new User(userName, userEmail));
  }
}
