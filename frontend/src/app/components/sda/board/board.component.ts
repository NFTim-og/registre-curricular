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

  private resetData(): void {
    this.competencesData = [];
    
  }
}
