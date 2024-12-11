import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Définition des types pour les compétences et les critères
type Competence = {
  id: number;
  description: string;
  criteres: { id: string; description: string }[];
};

type Saber = {
  id: string;  // Assurez-vous que le type id est 'string'
  description: string;
};

type Category = {
  id: number; 
  name: string;
  sabers: Saber[]; // Les sabers sont maintenant un tableau dans chaque catégorie
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
  isSabersSelected: boolean = false;


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

    // Données des catégories avec leurs sabers
    categories: Category[] = [
      {
        id: 1,
        name: "Les llengües i els seus parlants",
        sabers: [
          {
            id: "1.1",
            description: "Presa de consciència de la diversitat lingüística per mitjà de la biografia lingüística personal i el mapa lingüístic de l’aula, treballats amb acompanyament."
          },
          {
            id: "1.2",
            description: "Identificació, amb acompanyament, de prejudicis i estereotips lingüístics i cerca de solucions."
          },
          {
            id: "1.3",
            description: "Ús d’un llenguatge no discriminatori i respectuós amb les diferències en la vida quotidiana."
          }
        ]
      },
      {
        id: 2,
        name: "Comunicació oral",
        sabers: [
          {
            id: "2.1",
            description: "Interès per expressar-se oralment amb pronunciació i entonació adequades en les situacions d’aula."
          },
          {
            id: "2.2",
            description: "Comprensió de textos orals de tipologia diversa en diferents formats i mitjans."
          },
          {
            id: "2.3",
            description: "Identificació de la incidència dels components (situació, participants o intenció) en l’acte comunicatiu en diferents situacions comunicatives pròpies de l’aula i d’altres entorns informals."
          },
          {
            id: "2.4",
            description: "Aplicació d’estratègies lingüístiques elementals amb acompanyament i en contextos propers, per dotar textos breus i senzills d’adequació, coherència, cohesió i correcció."
          },
          {
            id: "2.5",
            description: "Identificació d’elements bàsics de contingut (tema, fórmules fixes, lèxic) i forma (estructura, format, imatges) en les produccions orals."
          },
          {
            id: "2.6",
            description: "Reproducció de textos orals memoritzats (cançons, poemes, dramatitzacions) en el marc de les propostes didàctiques d’aula."
          },
          {
            id: "2.7",
            description: "Ús de models textuals elementals (narració, descripció, diàleg) en les produccions orals, en el marc de les propostes didàctiques d’aula."
          },
          {
            id: "2.8",
            description: "Interacció oral adequada en situacions d’aula. Reconeixement i utilització d’estratègies bàsiques de cortesia lingüística."
          },
          {
            id: "2.9",
            description: "Aplicació d’estratègies d’escolta activa en la resolució dialogada dels conflictes, tenint en compte la perspectiva de gènere."
          }
        ]
      }
    ];

  
  selectedCompetenceId: number | null = null; // Stocke l'ID de la compétence sélectionnée
  selectedSaberId: string | null = null;

  onEnglishClick(): void {
    
    if (this.isEnglishSelected) {
      this.isCompetencesSelected = false;
      this.isSabersSelected = false;
    }
  
    this.isEnglishSelected = !this.isEnglishSelected;
  }

  onCompetencesClick(): void {
    this.isCompetencesSelected = true;
    this.isSabersSelected = false;  
  }

  onSabersClick(): void {
    
    this.isSabersSelected = true;
    this.isCompetencesSelected = false;  
  }

  onCompetenceIdClick(competenceId: number): void {
    if (this.selectedCompetenceId === competenceId) {
      this.selectedCompetenceId = null;
    } else {
      this.selectedCompetenceId = competenceId; 
    }
  }
  
  onSaberIdClick(saberId: string): void {
    if (this.selectedSaberId === saberId) {
      this.selectedSaberId = null;
    } else {
      this.selectedSaberId = saberId;
    }
  }

  onSubIdSelected(subId: string): void {
    
    this.selectedSubIds.add(subId);
    this.updateCheckboxState();
  }
  onSubIdDeselected(subId: string): void {
    
    this.selectedSubIds.delete(subId);
    this.updateCheckboxState();
  }
  private updateCheckboxState(): void {
    
    this.isCheckboxEnabled = this.selectedSubIds.size > 0;
  }
}