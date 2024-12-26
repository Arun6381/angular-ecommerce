import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productcatogrymodel } from '../models/productcatogrymodel';

@Injectable({
  providedIn: 'root'
})
export class ProductcategoryService {

  private baseUrl = 'https://localhost:7217/api/ProductItems/category';

  constructor(private http: HttpClient) {}

  getProductsByCategories(categoryId: number): Observable<Productcatogrymodel[]> {
    const apiUrl = `${this.baseUrl}/${categoryId}`;
    return this.http.get<Productcatogrymodel[]>(apiUrl);
  }}
