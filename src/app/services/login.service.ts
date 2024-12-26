import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login-model';
import { LoginRespons } from '../models/login-respons';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginApiUrl = 'https://localhost:7217/api/auth/login';

  constructor(private http: HttpClient) {}

  login(postData: LoginModel) {
    return this.http.post<LoginRespons>(this.loginApiUrl, postData);
  }
   }
