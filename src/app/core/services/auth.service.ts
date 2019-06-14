import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from '../../../environments/environment';
import { AuthInfo } from "../models/core.models";
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  authInfo: AuthInfo;
  constructor(private http: HttpClient, private router: Router) {
    this.authInfo = JSON.parse(localStorage.getItem('auth'))
  }

  login({ email, password }) {
    return this.http
      .post(`${environment.backendUrl}/api/account/login`, { email, password }).pipe(
        tap((info: AuthInfo) => {
          this.authInfo = info;
          localStorage.setItem('auth', JSON.stringify(info))
        })
      )
  }
  signup({ email, password, location }) {
    return this.http
      .post(`${environment.backendUrl}/api/account/signup`, { email, password, location })
  }
  logout() {
    localStorage.removeItem('auth');
    this.authInfo = null;
  }
}