import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




export interface FoodItem
{
    foodItemId: number;
    categoryName: string;
    itemName: string;
    description: string;
    price: number;
}
      

@Injectable({
    providedIn: 'root'
  })

  export class FoodItemService
  {
    constructor(private http: HttpClient) { }

    getFoodItem() : Observable<any>
    {
        const apiUrl = 'https://localhost:7135/api/FoodItemsControllerAdmin';

        return this.http.get(apiUrl);
    }


  }



