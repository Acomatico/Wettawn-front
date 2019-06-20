import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from './layout/main-nav/main-nav.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './features/homepage/homepage.module#HomepageModule'
  },
  {
    path: 'signup',
    loadChildren: './features/signup-page/signup-page.module#SignupPageModule'
  },
  {
    path: 'login',
    loadChildren: './features/login-page/login-page.module#LoginPageModule'
  },
  {
    path: '',
    component: MainNavComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'account',
        loadChildren: './features/account/account.module#AccountModule'
      },
      {
        path: 'addtravel',
        loadChildren: './features/add-travel/add-travel.module#AddTravelModule'
      },
      {
        path: 'travel',
        loadChildren: './features/current-travel/current-travel.module#CurrentTravelModule'
      },
      {
        path: 'search/:city',
        loadChildren: './features/search-result/search-result.module#SearchResultModule'
      },
      {
        path: '**',
        loadChildren: './features/not-found/not-found.module#NotFoundModule'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
