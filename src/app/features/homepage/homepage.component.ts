import { Component, ViewChild } from '@angular/core';
import { SwiperDirective, SwiperConfigInterface, SwiperScrollbarInterface, SwiperPaginationInterface, SwiperComponent } from 'ngx-swiper-wrapper';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'p-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  public show: boolean = true;

  public slides = [
    'https://c.stocksy.com/a/gbn400/z9/1144004.jpg?1552177593',
    'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    'https://i.pinimg.com/originals/6d/ff/3e/6dff3e6b47e1594f34e26bfc46b4d334.jpg',
    'https://www.whitecase.com/sites/default/files/images/sidebar/2019/03/Prague_Desktop_800x1280.jpg',
    'https://i2.wp.com/journeytom.com/wp-content/uploads/2016/10/Durdle-Door-Beach-Jurassic-Coast-Dorset.jpg?resize=768%2C1024',
    'https://www.thetelegraphandargus.co.uk/resources/images/8668421?type=responsive-gallery-fullscreen'
  ];

  public type: string = 'component';

  public disabled: boolean = false;

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  private scrollbar: SwiperScrollbarInterface = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  };

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };

  @ViewChild(SwiperComponent) componentRef: SwiperComponent;
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;


  loggedIn = false;
  constructor(private authService: AuthService) {

    if (this.authService.authInfo && this.authService.authInfo.token) {
      this.loggedIn = true;
    }
    else {
      this.loggedIn = false;
    }
  }
}
