import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})

export class AccountService {
  constructor(private http: HttpClient) {

  }

  editAccount({ email, city }) {
    return this.http.put(`${environment}/api/account/edit`, { email, city })
  }
}