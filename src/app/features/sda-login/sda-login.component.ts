import { Component, OnInit } from '@angular/core';
import loginData from '../../../assets/login.json';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sda-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sda-login.component.html',
  styleUrls: ['./sda-login.component.css']
})

export class SdALoginComponent implements OnInit {
  loginDetails: any = {};
  isSubmitted: boolean = false;

  ngOnInit(): void {
    this.loginDetails = loginData;
    console.log('Login details loaded:', this.loginDetails);
  }

  onSubmit(): void {
    this.isSubmitted = true; // Indique que l'utilisateur a soumis le formulaire
    if (!this.loginDetails.user || !this.loginDetails.password) {
      console.error('Form validation failed: All fields are required.');
      return; // Empêche la soumission si un champ est vide
    }
    console.log('Form submitted successfully with:', this.loginDetails);
  }
}

