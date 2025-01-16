import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavigationBarComponent } from './components/side-navigation-bar/side-navigation-bar.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './core/services/user/user.service';
import { SdaBasicInfoComponent } from './components/sda/sda-basic-info/sda-basic-info.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { NgIf } from '@angular/common';
import { SdaVectorsComponent } from './components/sda/sda-vectors/sda-vectors.component';
import { ConfigurationMenuComponent } from './components/configuration-menu/configuration-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SdaBasicInfoComponent, 
    SideNavigationBarComponent, 
    LoginComponent, 
    TopNavigationComponent, 
    NgIf, 
    SdaVectorsComponent,
    ConfigurationMenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registre-curricular';

  constructor(private userService: UserService) {}

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn(); 
  }

  showConfiguracio = false;

  handleNavSelection(navItem: string): void {
    if (navItem === 'configuration') {
      this.showConfiguracio = true;
    } else {
      this.showConfiguracio = false;
    }
  }
}
