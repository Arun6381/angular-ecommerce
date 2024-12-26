import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router ,RouterLink} from '@angular/router';  // Use Router, not Route
import { LoginRespons } from '../models/login-respons';
import { LoginService } from '../services/login.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService, 
    private router: Router,
    private authservice:AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  
  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value; 
      this.loginService.login(loginData).subscribe(
        (response: LoginRespons) => {
          console.log('Login successful:', response);
          localStorage.setItem('token', response.token);
          localStorage.setItem('username', response.firstName);
          localStorage.setItem('role', response.roles);
          localStorage.setItem('userid', response.userID);

          this.authservice.updateAuthState();
          this.errorMessage = null; 
          if(response.roles=="admin"){
            this.router.navigate(['/admindashboard']); 
          }
          // else if(response.roles='user'){
          //   this.router.navigate(['/home'])
          // }else{
          //   this.router.navigate(['/login'])
          // }
          alert(`Login Successfully Completed ${response.firstName}`)

        },
        (error) => {
          console.error('Login failed:', error);
          this.errorMessage = 'Invalid email or password. Please try again.';
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
  
}






// onSubmit() {
  //   if (this.loginForm.valid) {

  //     this.loginService.login(this.loginForm.value).subscribe(
  //       (response: any) => {
  //         console.log('Login successful:', response);
  //         localStorage.setItem('token', response.token);
  //         localStorage.setItem('username', response.firstName);
  //         localStorage.setItem('role', response.roles);
  //         localStorage.setItem('userid', response.userID);

  //         this.errorMessage = null; 
  //         this.router.navigate(['/home']); 
  //       },
  //       (error) => {
  //         console.error('Login failed:', error);
  //         this.errorMessage = 'Invalid email or password. Please try again.';
  //       }
  //     );
  //   } else {
  //     console.log('Form is invalid');
  //   }
  // }

