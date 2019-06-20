import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../core/services/weather.service'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'p-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})

export class SearchResultComponent implements OnInit {
  constructor(public weatherService: WeatherService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
    let city;
    this.route.paramMap.subscribe(params => {
      city = params.get('city')

    })
    // console.log(city);
    this.weatherService.searchWeather(city).subscribe()

  }
}