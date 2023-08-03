import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  feature:string = '';

  showPanel() : boolean {
    return this.feature != null ? true : false;
  }

}
