import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import competencesData from '../../assets/competences.json';

@Component({
  selector: 'app-sda-competences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sda-competences.component.html',
  styleUrls: ['./sda-competences.component.css'],
})
export class SdACompetencesComponent {
  competences = competencesData.competences;

  // Progression initiale
  progress = 0;

  // Total de critères
  private totalCriteres = this.competences.reduce(
    (sum, competence) => sum + competence.criteres.length,
    0
  );

  // Nombre de critères cochés
  private completedCriteres = 0;

  // Gestion des changements de checkbox
  onCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.completedCriteres += checkbox.checked ? 1 : -1;

    // Calculer la progression en pourcentage
    this.progress = Math.round((this.completedCriteres / this.totalCriteres) * 100);
  }
}