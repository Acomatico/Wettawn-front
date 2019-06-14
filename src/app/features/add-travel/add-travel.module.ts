import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AddTravelComponent } from "./add-travel.component";
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AddTravelComponent
  }
]

@NgModule({
  declarations: [AddTravelComponent],
  imports: [ReactiveFormsModule, CommonModule, RouterModule.forChild(routes)],
  exports: []
})

export class AddTravelModule { }