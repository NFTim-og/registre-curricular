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

  progress = 0;

  private totalCriteres = this.competences.reduce(
    (sum, competence) => sum + competence.criteres.length,
    0
  );

  private completedCriteres = 0;

  onCheckboxChange(event: Event, competenceIndex: number, criteriIndex: number): void {
    const checkbox = event.target as HTMLInputElement;
  
    // Actualitzem l'estat del criteri
    this.competences[competenceIndex].criteres[criteriIndex].checked = checkbox.checked;
  
    // Comprovem si almenys un criteri de la competència està marcat
    const competence = this.competences[competenceIndex];
    competence.competenceChecked = competence.criteres.some(criteri => criteri.checked);
  
    // Actualitzem el progrés de la competència
    const completedCriteres = competence.criteres.filter(criteri => criteri.checked).length;
    competence.progress = Math.round((completedCriteres / competence.criteres.length) * 100);
  }
  
}
