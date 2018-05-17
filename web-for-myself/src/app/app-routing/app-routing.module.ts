import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from '../home-page/home-page.component';
import {CarsPageComponent} from '../cars-page/cars-page.component';
import {RouterModule, Routes} from '@angular/router';
import {CarComponent} from '../car/car.component';

const appRoutes: Routes = [
  { path: 'cars', component: CarsPageComponent },
  { path: 'cars/:id/:name', component: CarComponent },
  { path: '', component: HomePageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
