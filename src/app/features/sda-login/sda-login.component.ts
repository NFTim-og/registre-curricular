import { Component, OnInit } from '@angular/core';
import loginData from '../../../assets/login.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sda-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sda-login.component.html',
  styleUrls: ['./sda-login.component.css']
})
export class SdALoginComponent implements OnInit {
  loginDetails: any = {}; 

  ngOnInit(): void {
    this.loginDetails = loginData; 
    console.log('Login details loaded:', this.loginDetails);
  }
}
