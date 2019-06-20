import { NgModule } from "@angular/core";
import { HomepageComponent } from './homepage.component'
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SliderComponent } from './slider/slider.component';
import { SharedModule } from 'src/app/shared/shared.module';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  observer: true,
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 'auto',
  centeredSlides: true
}

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  }
];

@NgModule({
  declarations: [HomepageComponent, SliderComponent],
  exports: [],
  imports: [CommonModule, RouterModule.forChild(routes), SwiperModule, SharedModule],
  providers: [{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }]
})


export class HomepageModule { }