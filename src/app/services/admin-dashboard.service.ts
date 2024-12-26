import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAddtocart } from '../models/get-addtocart';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {
  private api='https://localhost:7217/api/AddToCart/GetCartDetail';
  constructor(private http:HttpClient) { }

  getAddToCart():Observable<GetAddtocart[]>{
    return this.http.get<GetAddtocart[]>(this.api)
  }
}
