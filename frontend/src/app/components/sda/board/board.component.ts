import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Définition des types pour les compétences et les sabers
type Competence = {
  id: number;
  description: string;
  criteres: { id: string; description: string }[];
};

type Saber = {
  id: number;
  description: string;
  sabers: { id: string; description: string }[];
};

type DataItem = Competence | Saber;

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
  isSabersSelected: boolean = false;

  // Données exactes de compétences
  competences: Competence[] = [
    {
      id: 1,
      description: "Prendre consciència de la diversitat lingüística i cultural...",
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

  // Données exactes de sabers
  sabers = {
    categories: [
      {
        id: 1,
        name: "Les llengües i els seus parlants",
        sabers: [
          { id: "1.1", description: "Presa de consciència de la diversitat lingüística..." },
          { id: "1.2", description: "Identificació de prejudicis i estereotips lingüístics..." },
          { id: "1.3", description: "Ús d’un llenguatge no discriminatori..." }
        ]
      },
      {
        id: 2,
        name: "Comunicació oral",
        sabers: [
          { id: "2.1", description: "Interès per expressar-se oralment..." },
          { id: "2.2", description: "Comprensió de textos orals..." },
          { id: "2.3", description: "Identificació de la incidència dels components..." },
          { id: "2.4", description: "Aplicació d’estratègies lingüístiques elementals..." },
          { id: "2.5", description: "Identificació d’elements bàsics de contingut..." }
        ]
      }
    ]
  };

  onEnglishClick(): void {
    this.isEnglishSelected = !this.isEnglishSelected; // Toggle the display
  }

  onCompetencesClick(): void {
    this.isCompetencesSelected = true;
    this.isSabersSelected = false; // Hide sabers when showing competences
  }

  onSabersClick(): void {
    this.isCompetencesSelected = false; // Hide competences when showing sabers
    this.isSabersSelected = true;
  }
}
