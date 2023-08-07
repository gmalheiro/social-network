import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() userElement: UserModel;
  @Output() userSelected = new EventEmitter<void>();

  onSelected() {
    this.userSelected.emit();
  }
  
}
