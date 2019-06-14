import { Component, OnInit } from "@angular/core";
import { TravelService } from "../../core/services/travel.service";
import { WeatherService } from "../../core/services/weather.service"

@Component({
  selector: 'p-cur-travel',
  templateUrl: './current-travel.component.html',
  styleUrls: ['./current-travel.component.scss']
})

export class CurrentTravelComponent implements OnInit {

  constructor(public travelService: TravelService, public weatherService: WeatherService) { }
  ngOnInit() {
    this.weatherService.currentTrip().subscribe(
      () => {
        this.weatherArray = this.weatherService.weatherInfo.slice(1, this.weatherService.weatherInfo.length - 1)
        console.log(this.weatherArray);
        this.city = this.weatherService.weatherInfo[0];
      }
    )
    this.travelService.currentTravel().subscribe()


  }
  city;
  weatherArray;

}