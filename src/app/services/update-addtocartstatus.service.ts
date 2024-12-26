import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAddtocart } from '../models/get-addtocart';

@Injectable({
  providedIn: 'root'
})
export class UpdateAddtocartstatusService {

  private api='https://localhost:7217/api/AddToCart/UpdateStatus'
  constructor(private http:HttpClient) { }

  placeTheOrder(cartId:number):Observable<GetAddtocart[]>{
     const apiUrl=`${this.api}/${cartId}`
     return this.http.put<GetAddtocart[]>(apiUrl,null)
  }
}
