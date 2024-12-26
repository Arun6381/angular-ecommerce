import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignupModel } from '../models/signup-model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private baseUrl='https://localhost:7217/api/users';
  constructor(private http:HttpClient) {
  
   }
   registerUser(postData:SignupModel){
    return this.http.post(this.baseUrl,postData)
  }
}
