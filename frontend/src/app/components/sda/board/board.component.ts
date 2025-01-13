import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import mockData from '../../../../assets/mockData.json';

interface Competence {
  id: number;
  competencia: string;
  subject: string;
  criteris: {
    id: number;
    description: string;
    indicateurs: string[];
  }[];
}

interface Saber {
  id: number;
  saber: string;
  subject: string;
  sabers: {
    id: number;
    description: string;
    indicateurs: string[];
  }[];
}

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit{
  subjects: string[] = [
    'Llengua Catalana', 'Llengua Estrangera', 'Matemàtiques', 'Coneixement del medi natural, social i cultural', 'Educació Artística','Educació Física', 'Educació en valors cívics i ètics', 'Competència ciutadana (CC)', 'Competència emprenedora (CE)', 'Competència digital (CD)',
  ];

  competences = [
    {
      id: 1,
      competencia: "Prendre consciència de la diversitat lingüística i cultural...",
      subject: "Llengua Catalana",
      criteris: [
        {
          id: 1.1,
          description: "Identificar les diferents llengües de l'entorn...",
          indicateurs: ["Descripció d'algunes expressions d'ús quotidià"]
        },
        {
          id: 1.2,
          description: "Detectar i rebutjar, de manera acompanyada...",
          indicateurs: ["Rebutjar estereotips i prejudicis lingüístics"]
        },
        {
          id: 1.3,
          description: "Descriure i valorar la pluralitat lingüística...",
          indicateurs: ["Identificació de la realitat pròxima"]
        }
      ]
    },
    {
      id: 2,
      competencia: "Comprendre et interpréter des textes oraux et multimodaux...",
      subject: "Llengua Catalana",
      criteris: [
        {
          id: 2.1,
          description: "Extreure informació rellevant de textos orals...",
          indicateurs: ["Extracció de la informació rellevant"]
        },
        {
          id: 2.2,
          description: "Reconèixer el tema, idees principals i missatges explícits...",
          indicateurs: ["Identificació de missatges explícits"]
        }
      ]
    },
    {
      id: 3,
      competencia: "Produire des textes oraux et multimodaux avec cohérence...",
      subject: "Llengua Catalana",
      criteris: [
        {
          id: 3.1,
          description: "Produir textos orals i multimodals coherents...",
          indicateurs: ["Producció de textos coherents"]
        }
      ]
    },
    {
      id: 4,
      competencia: "Comprendre et interpréter des textes écrits...",
      subject: "Llengua Catalana",
      criteris: [
        {
          id: 4.1,
          description: "Llegir textos propers...",
          indicateurs: ["Fluïdesa suficient en la lectura"]
        },
        {
          id: 4.2,
          description: "Comprendre textos escrits i multimodals...",
          indicateurs: ["Identificació del sentit global"]
        }
      ]
    },
    {
      id: 5,
      competencia: "Produire des textes écrits et multimodaux...",
      subject: "Llengua Catalana",
      criteris: [
        {
          id: 5.1,
          description: "Redactar textos escrits i multimodals...",
          indicateurs: ["Adequació, coherència i cohesió"]
        },
        {
          id: 5.2,
          description: "Aplicar estratègies de planificació...",
          indicateurs: ["Planificació i edició de textos"]
        }
      ]
    },
    {
      id: 6,
      competencia: "Cercar, seleccionar i contrastar informació...",
      subject: "Llengua Catalana",
      criteris: [
        {
          id: 6.1,
          description: "Aplicar estratègies de cerca d’informació...",
          indicateurs: ["Cerca d'informació a la xarxa i biblioteques"]
        }
      ]
    },
    {
      id: 7,
      competencia: "Seleccionar i llegir de manera autònoma obres diverses...",
      subject: "Llengua Catalana",
      criteris: [
        {
          id: 7.1,
          description: "Llegir de manera autònoma textos de diferents autors...",
          indicateurs: ["Lectura de llibres adaptats als seus gustos"]
        }
      ]
    },
    {
      id: 8,
      competencia: "Llegir, interpretar i analitzar obres literàries...",
      subject: "Llengua Catalana",
      criteris: [
        {
          id: 8.1,
          description: "Escoltar i llegir textos orals i escrits...",
          indicateurs: ["Descobriment dels elements essencials de l'obra"]
        }
      ]
    },
    {
      id: 9,
      competencia: "Reflexionar de forma guiada sobre el llenguatge...",
      subject: "Llengua Catalana",
      criteris: [
        {
          id: 9.1,
          description: "Formular conclusions elementals sobre la construcció de paraules...",
          indicateurs: ["Experimentació amb les paraules"]
        }
      ]
    },
    {
      id: 10,
      competencia: "Utilitzar un llenguatge no discriminatori...",
      subject: "Llengua Catalana",
      criteris: [
        {
          id: 10.1,
          description: "Rebutjar els usos lingüístics discriminatoris...",
          indicateurs: ["Reflexió grupal sobre els aspectes verbals"]
        }
      ]
    }
  ];

  sabers = [
      {
        "id": 1,
        "saber": "Les llengües i els seus parlants",
        "subject": "Llengua Catalana",
        "sabers": [
          {
            "id": 1.1,
            "description": "Presa de consciència de la diversitat lingüística...",
            "indicateurs": ["Biografia lingüística personal"]
          },
          {
            "id": 1.2,
            "description": "Identificació de prejudicis i estereotips lingüístics...",
            "indicateurs": ["Cerca de solucions"]
          }
        ]
      },
      {
        "id": 2,
        "saber": "Comunicació oral",
        "subject": "Llengua Catalana",
        "sabers": [
          {
            "id": 2.1,
            "description": "Interès per expressar-se oralment...",
            "indicateurs": ["Pronunciació adequada en les situacions d’aula"]
          },
          {
            "id": 2.2,
            "description": "Comprensió de textos orals de tipologia diversa...",
            "indicateurs": ["Comprensió de textos orals"]
          }
        ]
      },
      {
        "id": 3,
        "saber": "Comprensió lectora",
        "subject": "Llengua Catalana",
        "sabers": [
          {
            "id": 3.1,
            "description": "Lectura individual i silenciosa...",
            "indicateurs": ["Fluïdesa en la lectura"]
          }
        ]
      },
      {
        "id": 4,
        "saber": "Expressió escrita",
        "subject": "Llengua Catalana",
        "sabers": [
          {
            "id": 4.1,
            "description": "Comprensió i ús de convencions del codi escrit...",
            "indicateurs": ["Producció de textos escrits"]
          }
        ]
      },
      {
        "id": 5,
        "saber": "Alfabetització informacional",
        "subject": "Llengua Catalana",
        "sabers": [
          {
            "id": 5.1,
            "description": "Aplicació d'estratègies bàsiques per la recerca guiada...",
            "indicateurs": ["Recerca d'informació en fonts digitals"]
          }
        ]
      }
    ];
  
  selectedSubject: string | null = null;
  competencesData: Competence[] = [];
  showCompetencesSection = false;
  sabersData: Saber[] = [];  
  showSabersSection = false;

  ngOnInit(): void {
    this.competencesData = mockData.competences;
    this.sabersData = mockData.sabers;
  }

  toggleSubject(subject: string): void {
    this.selectedSubject = this.selectedSubject === subject ? null : subject;
    this.resetData();
  }

  showCompetences(): void {
    if (this.showCompetencesSection) {
      this.showCompetencesSection = false;
      this.competencesData = [];  
    } else {
      this.showCompetencesSection = true;
      this.showSabersSection = false;
      
      const subject = this.selectedSubject;
      if (subject && subject.trim() !== "") {
        this.competencesData = mockData.competences.filter(competence =>
          competence.subject.toLowerCase() === subject.toLowerCase()
        );
      }
    }
  }
  
  

  showSabers(): void {
    if (this.showSabersSection) {
      this.showSabersSection = false;
      this.sabersData = [];  
    } else {
      this.showSabersSection = true;
      this.showCompetencesSection = false;
  
      const subject = this.selectedSubject;
      if (subject && subject.trim() !== "") {
        this.sabersData = mockData.sabers.filter(saber => 
          saber.subject.toLowerCase() === subject.toLowerCase()
        );
      }
    }
  }

  private resetData(): void {
    this.competencesData = [];
    this.sabersData = [];
  }
}
