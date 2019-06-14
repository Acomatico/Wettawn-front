import { NgModule } from "@angular/core";
import { HomepageComponent } from './homepage.component'
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  }
];

@NgModule({
  declarations: [HomepageComponent, SliderComponent],
  exports: [],
  imports: [CommonModule, RouterModule.forChild(routes)]
})


export class HomepageModule { }