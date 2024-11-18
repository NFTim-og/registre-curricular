import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import competencesData from '../../assets/competences.json';

@Component({
  selector: 'app-sda-competences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sda-competences.component.html',
  styleUrl: './sda-competences.component.css'
})
export class SdACompetencesComponent {
  competences = competencesData.competences;
}
