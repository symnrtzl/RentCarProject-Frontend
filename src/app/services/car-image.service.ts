import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carImage';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl="https://localhost:44308/api/";

  constructor(private httpClient: HttpClient) { }

  getImageByCar(carId: number):Observable<ListResponseModel<CarImage>>{
    let newPath= this.apiUrl + "CarImage/getbycarid?carId=" + carId
    return this.httpClient.get<ListResponseModel<CarImage>>(this.apiUrl);
  }

}
