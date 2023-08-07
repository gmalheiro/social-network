import { Component, Input } from '@angular/core';
import { UserModel } from '../user-list/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  @Input() user : UserModel;
}
