import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SdALoginService } from '../../../core/services/sda-login.service';
import { Router } from '@angular/router';



// Mock data simulant une base de données
const MOCK_DATA = {
  user: 'prof@example.com',
  password: 'password123',
};

@Component({
  selector: 'app-sda-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sda-login.component.html',
  styleUrls: ['./sda-login.component.css']
})
export class SdALoginComponent {
  loginDetails = { user: '', password: '' };
  loginError: string | null = null;

  constructor(private loginService: SdALoginService, private router: Router) {}

  onSubmit(): void {
    if (!this.loginDetails.user || !this.loginDetails.password) {
      this.loginError = 'Please fill in the fields.';
      return;
    }

    this.loginService.login(this.loginDetails.user, this.loginDetails.password).subscribe({
      next: (response) => {
        if (response.success) {
          this.loginError = null;
          this.router.navigate(['/listusers']); // Redirigeix si el login és correcte
        } else {
          this.loginError = 'Invalid credentials. Please try again.';
        }
      },
      error: () => {
        this.loginError = 'An error occurred. Please try again later.';
      },
    });
  }
  
}
