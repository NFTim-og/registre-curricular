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
