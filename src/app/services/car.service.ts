import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetails } from '../models/carDetails';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44308/api/";

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetails>>{
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath = this.apiUrl + "cars/getbycolorId?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath = this.apiUrl + "cars/getbybrandId?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)
  }
  
  getCarDetails(carId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath = this.apiUrl + "cars/getcardetailsid?carId="+ carId
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)
  }

}