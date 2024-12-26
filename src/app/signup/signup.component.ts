import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router ,RouterLink} from '@angular/router';  // Use Router, not Route
import { SignupService } from '../services/signup.service';
import { SignupModel } from '../models/signup-model';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  private registerServices = inject(SignupService);
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private signupService: SignupService,
    private router: Router  // Inject Router, not Route
  ) {
    this.signupForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        gender: ['', Validators.required],
        phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        username: ['', Validators.required],
        emailAddress: ['', [Validators.required, Validators.email]],
        passwordHash: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('passwordHash')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Signup data:', this.signupForm);
      const postData = { ...this.signupForm.value };
      delete postData.confirmPassword;

      this.registerServices.registerUser(postData as SignupModel).subscribe(
        {
          next: (res) => {
            console.log(res);
            this.router.navigate(['/login']);  // Use router.navigate here
          },
          error: (err) => {
            console.log(err);
          }
        });
    } else {
      console.log('Form is invalid');
    }
  }
}
