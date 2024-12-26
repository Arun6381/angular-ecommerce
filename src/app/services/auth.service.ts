import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  private userNameSubject = new BehaviorSubject<string>(localStorage.getItem('username') ?? 'guest');
  private roleSubject = new BehaviorSubject<string>(localStorage.getItem('role')??"");


  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  userName$ = this.userNameSubject.asObservable();
  role$ = this.roleSubject.asObservable();


  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  updateAuthState(): void {
    this.isLoggedInSubject.next(this.hasToken());
    this.userNameSubject.next(localStorage.getItem('username') ?? 'guest');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userid');
    localStorage.removeItem('role');
    this.updateAuthState();
  }

  // private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  // isLoggedIn$ = this.isLoggedInSubject.asObservable();

  // private hasToken(): boolean {
  //   return !!localStorage.getItem('token');
  // }

  // updateAuthState(): void {
  //   this.isLoggedInSubject.next(this.hasToken());
  // }

  // logout(): void {
  //   localStorage.clear();
  //   this.updateAuthState();
  // }
}

