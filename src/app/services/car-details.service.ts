import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetails } from '../models/carDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarDetailsService {

  apiUrl="https://localhost:44308/api/Cars/getcardetails";

  constructor(private httpClient:HttpClient) { }

  getAllCars():Observable<ListResponseModel<CarDetails>>{
    return this.httpClient.get<ListResponseModel<CarDetails>>(this.apiUrl);
  }
}
