import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SdaBasicInfoComponent } from "./components/sda/sda-basic-info/sda-basic-info.component";
import { SdACompetencesComponent } from './components/sda/sda-competences/sda-competences.component';
import { SideNavigationBarComponent } from './components/side-navigation-bar/side-navigation-bar.component';
import { SdASabersComponent } from './components/sda/sda-sabers/sda-sabers.component';
import { LoginComponent } from './components/login/login.component';
import { BoardComponent } from './components/sda/board/board.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideNavigationBarComponent, SdACompetencesComponent, SdASabersComponent, LoginComponent, BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'registre-curricular';
}
