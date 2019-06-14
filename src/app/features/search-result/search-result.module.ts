import { NgModule } from "@angular/core";
import { SearchResultComponent } from "./search-result.component";
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: SearchResultComponent
  }
]

@NgModule({
  declarations: [SearchResultComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: []
})

export class SearchResultModule { }