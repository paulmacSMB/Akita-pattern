import { Routes } from '@angular/router';
import { CarComponent } from './cars/car.component';
import { CarResolver } from './cars/car.resolver';


export const routes: Routes = [
 { path: '', component: CarComponent, resolve: { cars: CarResolver } }
];
