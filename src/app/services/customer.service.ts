import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerResponseModel } from '../models/customer/customerResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="https://localhost:44308/api/customers/getall";

  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<CustomerResponseModel>{
    return this.httpClient.get<CustomerResponseModel>(this.apiUrl);
  }
}
