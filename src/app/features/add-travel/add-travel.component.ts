import { Component, ɵConsole } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import { TravelService } from '../../core/services/travel.service'
import { Router } from '@angular/router';

@Component({
  selector: 'p-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['add-travel.component.scss']
})

export class AddTravelComponent {
  addTravelForm = this.fb.group({
    start: ['', [Validators.required]],
    end: ['', [Validators.required]],
    destination: ['', [Validators.required]]
  })
  constructor(private fb: FormBuilder, private travelService: TravelService, private router: Router) { }

  addTravel() {
    console.log(this.addTravelForm.value);
    this.travelService.addTravel(this.addTravelForm.value).subscribe(
      () => {
        this.router.navigate(['home'])
      }
    )
  }
}