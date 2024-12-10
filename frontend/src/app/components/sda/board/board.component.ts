import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


type Competence = {
  id: number;
  description: string;
  criteris: { id: string; description: string }[];
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
  competencesData: any[] = [];
  sabersData: any[] = [];

  private data = {
      competences: [
          {
              id: 1,
              description: "Prendre consciència de la diversitat lingüística i cultural...",
              criteris: [
                  { id: "1.1", description: "Identificar les diferents llengües de l'entorn..." },
                  { id: "1.2", description: "Detectar i rebutjar, de manera acompanyada..." },
                  { id: "1.3", description: "Descriure i valorar la pluralitat lingüística..." }
              ]
          },
          {
              id: 2,
              description: "Comprendre i interpretar textos orals i multimodals...",
              criteris: [
                  { id: "2.1", description: "Extreure informació rellevant de textos orals..." },
                  { id: "2.2", description: "Reconèixer, de forma acompanyada, el tema..." }
              ]
          }
      ],
      sabers: [
          {
              id: 1,
              description: "Les llengües i els seus parlants.",
              sabers: [
                  { id: "1.1", description: "Presa de consciència de la diversitat lingüística..." },
                  { id: "1.2", description: "Identificació, amb acompanyament, de prejudicis..." },
                  { id: "1.3", description: "Ús d’un llenguatge no discriminatori..." }
              ]
          },
          {
              id: 2,
              description: "Comunicació oral.",
              sabers: [
                  { id: "2.1", description: "Interès per expressar-se oralment..." },
                  { id: "2.2", description: "Comprensió de textos orals de tipologia diversa..." }
              ]
          }
      ]
  };

  onEnglishClick() {
      this.isEnglishSelected = true;
  }

  onCompetencesClick() {
      this.competencesData = this.data.competences; // Asigna los datos de competences
  }

  onSabersClick() {
      this.sabersData = this.data.sabers; // Asigna los datos de sabers
  }
}


