import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAddtocart } from '../models/get-addtocart';

@Injectable({
  providedIn: 'root'
})
export class GetAddtocartForUserService {

  private api='https://localhost:7217/api/AddToCart/GetCartDetailsByUserId'
  constructor(private http:HttpClient) { }

  getAllAddToCart(userId:number):Observable<GetAddtocart[]>{
    const apiUrl=`${this.api}/${userId}`
    return this.http.get<GetAddtocart[]>(apiUrl);

  }}
