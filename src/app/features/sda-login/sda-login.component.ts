import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  onSubmit(): void {
    // Vérifier les données avec le mock
    if (
      this.loginDetails.user === MOCK_DATA.user &&
      this.loginDetails.password === MOCK_DATA.password
    ) {
      this.loginError = null;
      alert('Login successful!');
    } else {
      this.loginError = 'Invalid credentials. Please try again.';
    }
  }
}
