import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { CurrentTravelComponent } from "./current-travel.component";


const routes: Routes = [{
  path: '',
  component: CurrentTravelComponent
}]
@NgModule({
  declarations: [CurrentTravelComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: []
})


export class CurrentTravelModule { }