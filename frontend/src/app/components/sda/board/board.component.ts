import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import mockData from '../../../../assets/mockData.json';

interface Competence {
  id: number;
  competencia: string;
  criteris: {
    id: number;
    description: string;
    indicateurs: string[];
  }[];
}

interface Saber {
  id: number;
  saber: string;
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
export class BoardComponent {
  subjects: string[] = [
    'English', 'Math', 'Science', 'History', 'Geography',
    'Art', 'Music', 'Physical Education', 'French', 'Computer Science',
  ];
  selectedSubject: string | null = null;
  competencesData: Competence[] = [];
  showCompetencesSection = false;
  sabersData: Saber[] = [];  
  showSabersSection = false;

  toggleSubject(subject: string): void {
    this.selectedSubject = this.selectedSubject === subject ? null : subject;
    this.resetData();
  }

  showCompetences(): void {
    this.showCompetencesSection = true;
    if (this.selectedSubject) {
      this.competencesData = mockData.competences.filter(comp => comp.competencia.includes(this.selectedSubject!));
    }
  }

  showSabers(): void {
    this.showSabersSection = true;
    if (this.selectedSubject) {
      this.sabersData = mockData.sabers.filter(saber => saber.saber.includes(this.selectedSubject!));
    }
  }

  private resetData(): void {
    this.competencesData = [];
    this.sabersData = [];
  }
}
