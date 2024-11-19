import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SdaBasicInfoComponent } from "./features/sda-basic-info/sda-basic-info.component";
import { SdACompetencesComponent } from './sda-competences/sda-competences.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SdaBasicInfoComponent, SdACompetencesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'registre-curricular';
}
