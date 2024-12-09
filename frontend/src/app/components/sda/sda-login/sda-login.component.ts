import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SdALoginService } from '../../../core/services/sda-login.service';
import { Router } from '@angular/router';

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
    // Vérifie si les champs sont vides
    if (!this.loginDetails.user || !this.loginDetails.password) {
      this.loginError = 'Please fill in all the fields.';
      return;
    }

    // Appelle le service pour envoyer les données au backend
    this.loginService.login(this.loginDetails.user, this.loginDetails.password).subscribe({
      next: (response) => {
        if (response.success) {
          // Succès : redirection ou autre logique
          this.loginError = null;
          this.router.navigate(['/listusers']);
        } else {
          // Gère l'erreur renvoyée par le backend
          this.loginError = response.message || 'An unexpected error occurred.';
        }
      },
      error: (err) => {
        // Gère les erreurs réseau ou serveur
        console.error('Error during login request:', err);
        this.loginError = 'Server connection failed. Please try again later.';
      }
    });
  }
}
