import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  template: `<p *ngIf="loading">Redirecting...</p>
             <p *ngIf="error">{{ error }}</p>`,
})
export class AuthCallbackComponent implements OnInit {
  loading: boolean = true;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const token = params['token'];
      const roles = params['Roles'];
      const userId = params['UserId'];
      const userName = params['userName'];

      if (token) {
        // Store the token and other details in local storage or session
        localStorage.setItem('token', token);
        localStorage.setItem('userName', userName);
        localStorage.setItem('userId', userId);
        localStorage.setItem('roles', roles);

        // Set login state and redirect accordingly
        this.loading = false;
        if (roles === 'admin') {
          this.router.navigate(['/adminboard']);
        } else if (roles === 'user') {
          this.router.navigate(['/']);
        } else {
          this.error = 'Unauthorized role';
          this.router.navigate(['/signin']);
        }
      } else {
        this.loading = false;
        this.error = 'Login failed: Missing token or user information.';
        this.router.navigate(['/signin']);
      }
    });
  }
}