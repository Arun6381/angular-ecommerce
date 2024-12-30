import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetvideoService {
  private apiUrl = 'https://localhost:7217/api/Video';
  constructor(private http:HttpClient) { }
  getVideoById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/play/${id}`);  // GET for fetching video by ID
  }
}
