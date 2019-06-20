import { Component } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'p-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {
  searchForm = this.fb.group({
    city: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder, private router: Router) { }

  search(city) {
    if (!city) return;
    this.router.onSameUrlNavigation = 'reload';
    //console.log(`/search/${city.city}`)
    this.router.navigate([`/search/${city.city}`]);
  }
}