import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SdaBasicInfoComponent } from "./features/sda-basic-info/sda-basic-info.component";
import { SdACompetencesComponent } from './features/sda-competences/sda-competences.component';
import { SideNavigationBarComponent } from './features/side-navigation-bar/side-navigation-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideNavigationBarComponent, SdACompetencesComponent, SdaBasicInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'registre-curricular';
}
