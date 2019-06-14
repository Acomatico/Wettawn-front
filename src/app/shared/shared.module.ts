import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SearchComponent } from './components/search/search.component';
import { EditAccountComponent } from './components/edit-account/edit-account.component'
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, SignupComponent, SearchComponent, EditAccountComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [LoginComponent, SignupComponent, SearchComponent, EditAccountComponent]
})
export class SharedModule { }
