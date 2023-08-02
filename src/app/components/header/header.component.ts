import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class HeaderComponent {
  logInConsole(){
    console.log('Hey');
  }
}
