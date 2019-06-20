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
        console.log(this.weatherService.weatherInfo)
        this.weatherArray = this.weatherService.weatherInfo.slice(1, this.weatherService.weatherInfo.length - 1)
        console.log(this.weatherArray);

      }
    )
    this.travelService.currentTravel().subscribe(
      () => {
        this.travelInfo = this.travelService.travelInfo;
        console.log(this.travelInfo)
      }
    )

  }
  travelInfo;
  weatherArray;

  areClothesVisible = false;
  showClothes() {
    this.areClothesVisible = true;
  }
  hideClothes() {
    this.areClothesVisible = false;
  }

}