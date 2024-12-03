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
  loginDetails: any = {}; // Stocke les détails de connexion

  ngOnInit(): void {
    this.loginDetails = loginData; // Charger les données JSON
    console.log('Login details loaded:', this.loginDetails);
  }

  // Méthode appelée lors du clic sur le bouton Login
  onSubmit(): void {
    console.log('Form submitted with:', this.loginDetails);
    // Vous pouvez ajouter ici des vérifications ou appels à des services
  }
}
