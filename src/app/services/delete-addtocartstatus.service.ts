import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAddtocart } from '../models/get-addtocart';

@Injectable({
  providedIn: 'root'
})
export class DeleteAddtocartstatusService {

  private api = 'https://localhost:7217/api/AddToCart/DeleteCartItem';
  constructor(private http: HttpClient) {}
  deletecartitem(cartId: number): Observable<GetAddtocart[]> {
    const apiUrl = `${this.api}/${cartId}`;
    return this.http.delete<GetAddtocart[]>(apiUrl);
  }}
