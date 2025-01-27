import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  getAddToCart() {
      throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://localhost:7217/api/AddToCart/AddToCart';

  constructor(private http:HttpClient) { }
  addToCart(userId: number, productId: number): Observable<any> {
    const payload = { UserId: userId, ProductId: productId };
    return this.http.post(this.apiUrl, payload);
  }
  
}
