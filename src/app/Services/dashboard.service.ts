import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';


interface ServiceResponse<T> {
  Success: boolean;
  Message: string;
  Data: T;
}

export interface Customer {  
  serialNumber : number ,
  customerName: string,
  email: string,
  phoneNumber : string,
 
}


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getAllCustomers(): Observable<ServiceResponse<any[]>> {
    const url = 'https://localhost:7135/api/RegisteredCustomers';
    return this.http.get<ServiceResponse<any[]>>(url);
  }

  // getAllCustomers(): Observable<Customer[]> {
  //   const url = 'https://localhost:7135/api/RegisteredCustomers';
  //   return this.http.get<Customer[]>(url).pipe(
  //     map((customers: Customer[]) => {
  //       // Assign serial number to each customer
  //       customers.forEach((customer, index) => {
  //         customer.serialNumber = index + 1;
          
  //       });
  //       return customers;
  //     })
  //   );
  // }

  getCustomerCount(): Observable<ServiceResponse<any>>
  {
    const url = 'https://localhost:7135/CustomerCount';
    return this.http.get<ServiceResponse<any>>(url);
  }

  getFoodItemCount() : Observable<ServiceResponse<any>>
  {
    const url = 'https://localhost:7135/api/FoodItemsControllerAdmin/CountFoodItems';
    return this.http.get<ServiceResponse<any>>(url);
  }
}
