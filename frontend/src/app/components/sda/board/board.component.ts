import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Définition des types pour les compétences et les critères
type Competence = {
  id: number;
  description: string;
  criteres: { id: string; description: string }[];
};

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  isEnglishSelected: boolean = false;
  isCompetencesSelected: boolean = false;

  // Données de compétences avec des critères d'évaluation
  competences: Competence[] = [
    {
      id: 1,
      description: "Prendre consciència de la diversitat lingüística et culturelle...",
      criteres: [
        { id: "1.1", description: "Identificar les diferents llengües de l'entorn..." },
        { id: "1.2", description: "Detectar i rebutjar prejudicis i estereotips lingüístics..." },
        { id: "1.3", description: "Descriure i valorar la pluralitat lingüística de l'entorn..." }
      ]
    },
    {
      id: 2,
      description: "Comprendre i interpretar textos orals i multimodals...",
      criteres: [
        { id: "2.1", description: "Extreure informació rellevant de textos orals..." },
        { id: "2.2", description: "Reconèixer el tema, idees principals..." }
      ]
    },
    {
      id: 3,
      description: "Produir textos orals i multimodals amb coherència...",
      criteres: [
        { id: "3.1", description: "Produir textos orals i multimodals coherents..." },
        { id: "3.2", description: "Participar en interaccions orals espontànies..." }
      ]
    }
  ];

  selectedCompetenceId: number | null = null; // Stocke l'ID de la compétence sélectionnée

  onEnglishClick(): void {
    this.isEnglishSelected = !this.isEnglishSelected; // Toggle l'affichage
  }

  onCompetencesClick(): void {
    this.isCompetencesSelected = true; // Affiche les compétences
  }

  onCompetenceIdClick(competenceId: number): void {
    // Si l'ID est déjà sélectionné, on le désélectionne
    if (this.selectedCompetenceId === competenceId) {
      this.selectedCompetenceId = null;
    } else {
      this.selectedCompetenceId = competenceId; // Sélectionne la compétence
    }
  }
}
