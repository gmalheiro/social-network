import { Component, DoCheck, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  feature:string = '';

  ngDoCheck(){
    console.log(this.feature);
  } 

  showPanel() : boolean {
    return this.feature != null ? true : false;
  }

}
