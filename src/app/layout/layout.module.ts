import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ModalComponent } from './modal/modal.component'
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, MainNavComponent, ModalComponent],
    imports: [CommonModule, RouterModule, SharedModule],
    exports: [HeaderComponent, FooterComponent, MainNavComponent, ModalComponent]
})
export class LayoutModule { }