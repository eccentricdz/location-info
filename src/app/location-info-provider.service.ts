import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http'
import { IntroCardModel } from './intro-card-model'
import 'rxjs/add/operator/map'

let googleMapResult:IntroCardModel = new IntroCardModel();

@Injectable()
export class LocationInfoProviderService {

  constructor(@Inject(Http) public http:Http) { }

  getIntroCardInfo(query:string){
    let requestUrl:string = "http://maps.googleapis.com/maps/api/geocode/json?address="+query+"&sensor=true";
    if (query && query!="") { 
      this.http.get(requestUrl)
      .map(res => res.json())
      .subscribe(
        mapData => {
          let firstResultSet = mapData.results[0];
          let locationData = firstResultSet.geometry.location;
          googleMapResult.formattedAddress = firstResultSet.formatted_address;
          googleMapResult.latitude = locationData.lat;
          googleMapResult.longitude = locationData.lng;
          googleMapResult.primaryName = firstResultSet.address_components[0].long_name;
          return googleMapResult;
        },
        error => console.log("Google maps ajax request failure!"),
        () => {}
      );

      return googleMapResult;
    }
  }

}
