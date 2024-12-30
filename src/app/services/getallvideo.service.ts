import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetallvideoService {

 private apiUrl = 'https://localhost:7217/api/Video/getallplay';
  constructor(private http:HttpClient) { }
  getallvideos(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);  
  }


}
