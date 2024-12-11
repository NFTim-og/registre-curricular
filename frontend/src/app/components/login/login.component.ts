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
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginDetails = { user: '', password: '' };
  loginError: string | null = null;

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

    this.loginService.login(this.loginDetails.user, this.loginDetails.password).subscribe({
      next: (response) => {
        if (response.success) {
          this.loginError = null;
          this.userService.setUsername(this.loginDetails.user); // Set login state
          this.router.navigate(['/listusers']);
        } else {
          this.loginError = response.message || 'An unexpected error occurred.';
        }
      },
      error: (err) => {
        console.error('Error during login request:', err);
        this.loginError = 'Server connection failed. Please try again later.';
      }
    });
  }
}
