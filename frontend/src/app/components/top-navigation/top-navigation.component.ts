import { Component } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent {
  username = 'JohnDoe'; // This should ideally come from a service

  logout() {
    // Handle the logout logic here
    console.log('Logout clicked');
    // Example: Redirect to the login page
    window.location.href = '/login';
  }
}
