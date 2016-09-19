import { Component } from '@angular/core';
import { LocinfoSearchBoxComponent } from './locinfo-search-box';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [LocinfoSearchBoxComponent]
})

export class AppComponent {
  constructor(){}
}
