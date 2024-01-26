import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarDetails } from '../../models/carDetails';
import { CarDetailsService } from '../../services/car-details.service';
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent implements OnInit {

  carDetails : CarDetails[] = [];
  baseUrl="https://localhost:44308/uploads/images/";

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetails(params["carId"])
      }
    })
  }

  getCarDetails(carId:number){
    this.carService.getCarDetails(carId).subscribe( response => {
      this.carDetails=response.data
    })
  }
    

}
