import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Catogrymodel } from '../models/catogrymodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'https://localhost:7217/api/productcategories';
  
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Catogrymodel[]> {
    return this.http.get<Catogrymodel[]>(this.apiUrl);
  }
}
