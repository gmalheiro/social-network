import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class HeaderComponent {

  @Output() featureSelected = new EventEmitter<string>();

  onFeatureSelected(feature:string){
    console.log(feature)
    this.featureSelected.emit(feature);
  }

}
