import { Component, Input } from '@angular/core';
import { LocationInfoProviderService } from '../location-info-provider.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { IntroCardModel } from '../intro-card-model';
import { IntroCardComponent } from '../intro-card';

@Component({
  moduleId: module.id,
  selector: 'locinfo-search-box',
  templateUrl: 'locinfo-search-box.component.html',
  styleUrls: ['locinfo-search-box.component.css'],
  providers: [LocationInfoProviderService, HTTP_PROVIDERS],
  directives: [IntroCardComponent]
})
export class LocinfoSearchBoxComponent {

  query:string = "";
  introCardInfo:IntroCardModel = new IntroCardModel();
  resultsFound:boolean = false;

  constructor(private providerService:LocationInfoProviderService) { }

  getLocationInformation() {
    this.introCardInfo = this.providerService.getIntroCardInfo(this.query);
    if (this.introCardInfo && this.introCardInfo !== null) {
      console.log(this.introCardInfo);
      this.resultsFound = true;
    }
  }
}
