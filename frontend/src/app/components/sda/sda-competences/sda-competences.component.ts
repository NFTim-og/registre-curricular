import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import competencesData from '../../../../assets/competences.json';
@Component({
  selector: 'app-sda-competences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sda-competences.component.html',
  styleUrls: ['./sda-competences.component.css'],
})
export class SdACompetencesComponent {
  competences = competencesData.competences;
  progress = 0;
  private totalCriteres = this.competences.reduce(
    (sum, competence) => sum + competence.criteres.length,
    0
  );
  private completedCriteres = 0;
  onCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.completedCriteres += checkbox.checked ? 1 : -1;
    this.progress = Math.round((this.completedCriteres / this.totalCriteres) * 100);
  }
}