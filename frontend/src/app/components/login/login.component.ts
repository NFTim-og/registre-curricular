import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SdALoginService } from '../../core/services/login/login.service';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  loginDetails = { user: '', password: '' };
  loginError: string | null = null;
  isLoading = false;

  constructor(
    private loginService: SdALoginService,
    private userService: UserService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (!this.loginDetails.user || !this.loginDetails.password) {
      this.loginError = 'Please fill in all the fields.';
      return;
    }

    this.isLoading = true;
    this.loginError = null;

    this.loginService.login(this.loginDetails.user, this.loginDetails.password).subscribe({
      next: (response) => {

        this.isLoading = false;

        if (response.success) {
          localStorage.setItem('authToken', response.token);
          console.log(localStorage.getItem("authToken"));
          this.userService.setUsername(this.loginDetails.user);
          this.router.navigate(['/listusers']);
        } else {
          this.loginError = response.message || 'An unexpected error occurred.';
        }
      },
      error: (err) => {
        
        this.isLoading = false;

        console.error('Error during login request:', err);

        
        if (err.status === 500) {
          this.loginError = 'Server connection failed. Please try again later.';
        } else if (err.status === 401) {
          this.loginError = 'Invalid credentials. Please check your username and password.';
        } else {
          this.loginError = 'An unexpected error occurred.';
        }
      },
    });
  }
}
