import { Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';

export const routes: Routes = [
    {path:"", component:CarComponent},
    {path:"cars", component:CarComponent},
    {path:"cars/color/:colorId", component:CarComponent},
    {path:"cars/brand/:brandId", component:CarComponent},
    {path:"cardetails/car/:carId", component:CarDetailsComponent}
];
