import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../../core/services/weather.service";
import { AccountService } from "../../core/services/account.service";
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'p-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})

export class AccountComponent implements OnInit {
  editAccountForm = this.fb.group({
    email: ['', [Validators.required]],
    city: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder, public weatherService: WeatherService, public accountService: AccountService) { }

  ngOnInit() {
    this.weatherService.localWeather().subscribe();
  }

}