import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  private apiUrl = 'https://localhost:7217/api/auth/logout'; 

  constructor(private http: HttpClient) {}
  logout(): Observable<any> {
    return this.http.post(this.apiUrl, {}, { withCredentials: true });
  }
}
