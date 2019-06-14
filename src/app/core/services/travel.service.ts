import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})


export class TravelService {
  constructor(private http: HttpClient, private router: Router) {
  }
  travelInfo = {}
  addTravel({ start, end, destination }) {
    return this.http.post(`${environment.backendUrl}/api/user/addtravel`, { start, end, destination })
  }
  currentTravel() {
    return this.http.get(`${environment.backendUrl}/api/user/travel-location`).pipe(
      tap((info) => {
        this.travelInfo = info;
      })
    )
  }

}