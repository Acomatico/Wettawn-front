import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'p-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  array = [1, 2, 3, 5]
  effect = 'scrollx';
  ngOnInit() {
  }




}
