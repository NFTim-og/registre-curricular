import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user/user.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {
  username: string | null = null;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.username$.subscribe((username: string | null) => {
      this.username = username;
    });
  }

  logout(): void {
    this.userService.logout().subscribe(() => {
      this.userService.clearUsername();
      console.log('User logged out');
      this.router.navigate(['/login']);
    });
  }
}