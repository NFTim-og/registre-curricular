import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavigationBarComponent } from './components/side-navigation-bar/side-navigation-bar.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './core/services/user/user.service';
import { SdaBasicInfoComponent } from './components/sda/sda-basic-info/sda-basic-info.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { BoardComponent } from './components/sda/board/board.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SdaBasicInfoComponent, SideNavigationBarComponent, LoginComponent, BoardComponent, TopNavigationComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registre-curricular';

  constructor(private userService: UserService) {}

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn(); 
  }
}
