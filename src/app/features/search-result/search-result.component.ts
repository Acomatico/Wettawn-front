import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../core/services/weather.service'
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'p-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})

export class SearchResultComponent implements OnInit {
  constructor(public weatherService: WeatherService, private router: Router) { }


  ngOnInit() {
    const url = this.router.url;
    const parsedUrl = url.split('/')
    const city = parsedUrl[parsedUrl.length - 1]
    this.weatherService.searchWeather(city).subscribe()

  }
}