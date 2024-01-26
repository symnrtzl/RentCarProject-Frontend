import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarService } from '../../services/car.service';
import { CarDetails } from '../../models/carDetails';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CarImage } from '../../models/carImage';
import { Car } from '../../models/car';
import { CarDetailsService } from '../../services/car-details.service';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit{

  cars : Car[] = [];
  cardetails: CarDetails[]= [];
  carImages: CarImage[] = [];
  currentCarDetail: CarDetails;
  baseUrl="https://localhost:44308/uploads/images/";
  dataLoaded = false;

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute, private carDetailService: CarDetailsService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else if(params["carId"]){
        this.getCarDetails(params["carId"])
      }
      else{
        this.getAllCars()
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response => {
      this.cardetails=response.data;
      this.dataLoaded;
    })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response =>{
      this.cardetails = response.data
      this.dataLoaded
    });
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe( response =>{
      this.cardetails=response.data
      this.dataLoaded
    });
  }

  getCarDetails(carId:number){
    this.carService.getCarDetails(carId).subscribe( response =>{
      this.cardetails=response.data
      this.dataLoaded
    })
  }

  setCurrentCarDetails(carDetails:CarDetails){
    this.currentCarDetail =carDetails
  }

  getCurrentCarDetails(){
    
  }

  getAllCars(){
    this.carDetailService.getAllCars().subscribe( response => {
      this.cardetails=response.data
    })
  }
}
