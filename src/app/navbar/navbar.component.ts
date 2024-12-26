import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoutService } from '../services/logout.service';
import { AuthService } from '../services/auth.service';
import { ThemeService } from '../services/theme.service';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms'; // Add this import

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule,ToggleSwitchModule,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isDarkMode=false;
    isLoggedIn = false;
    userName='guest';
    role: string | null = null;
    
  
    constructor(private logoutService: LogoutService,private authservice:AuthService,private themeService: ThemeService) {}
  
    ngOnInit(): void {
      this.isLoggedIn = !!localStorage.getItem('token');
      this.userName=localStorage.getItem('username')??'guest';
      this.role = localStorage.getItem('role');
  
  
      this.authservice.isLoggedIn$.subscribe((status) => (this.isLoggedIn = status));
      this.authservice.userName$.subscribe((name) => (this.userName = name));
      this.authservice.role$.subscribe((role) => (this.role = role));

      this.themeService.initializeTheme(); 
  
    }
  
   toggleTheme() {
    this.themeService.toggleTheme();
  }
    logout(): void {
      this.logoutService.logout().subscribe({
        next: () => {
          localStorage.removeItem('token');
          localStorage.removeItem('username');
          localStorage.removeItem('userid');
          localStorage.removeItem('role');
  
          this.isLoggedIn = false;
          window.location.href = '/login'; 
        },
        error: (err: any) => {
          console.error('Logout failed', err);
        }
      });
    }
  
    toggleMenu(): void {
      const navbarLinks = document.getElementById('navbar-links');
      if (navbarLinks) {
        navbarLinks.classList.toggle('show');
      }
    }
  }
  
  
  

