import { Component, Input } from '@angular/core';
import { IntroCardModel } from '../intro-card-model'

@Component({
  moduleId: module.id,
  selector: 'loc-intro-card',
  templateUrl: 'intro-card.component.html',
  styleUrls: ['intro-card.component.css']
})
export class IntroCardComponent {

  @Input() introCardInfo:IntroCardModel;

  constructor() { }

}
