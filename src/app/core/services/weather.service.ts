import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { WeatherInfo } from "../models/core.models";
import { environment } from "../../../environments/environment";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  weatherInfo = []
  constructor(private http: HttpClient) { }

  localWeather() {
    return this.http
      .get(`${environment.backendUrl}/api/user/weather`).pipe(
        tap((weather: any) => {
          this.weatherInfo.push(weather)
        })
      )
  }
  searchWeather(city) {
    return this.http
      .get(`${environment.backendUrl}/api/user/search/${city}`).pipe(
        tap((weather: any) => {
          this.weatherInfo.push(weather)
        })
      )
  }
  weatherForecast(city) {
    return this.http
      .post(`${environment.backendUrl}/api/user/search`, { city }).pipe(
        tap((weather: any[]) => {
          this.weatherInfo.push(weather);
        })
      )
  }
  currentTrip() {
    return this.http
      .get(`${environment.backendUrl}/api/user/travel`).pipe(
        tap((weather: any[]) => {
          weather.forEach(
            day => {
              this.weatherInfo.push(day)
            }
          )
        })
      )
  }
}