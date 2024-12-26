import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productcatogrymodel } from '../models/productcatogrymodel';

@Injectable({
  providedIn: 'root'
})
export class GetAllProductService {

  private api='https://localhost:7217/api/productitems';
  constructor(private http:HttpClient) { }
   getAllProduct(): Observable<Productcatogrymodel[]> {
      return this.http.get<Productcatogrymodel[]>(this.api);
    }}
