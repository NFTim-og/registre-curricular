import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import mockData from '../../../../assets/mockData.json';

interface Competence {
  id: string;
  competencia: string;
  sous_competences: {
    id: string;
    description: string;
    indicateurs: string[];
  }[];
}

interface Saber {
  id: string;
  saber: string;
  sous_sabers: {
    id: string;
    description: string;
  }[];
}

interface MockData {
  competences: Competence[];
  sabers: Saber[];
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

  toggleSubject(subject: string): void {
    this.selectedSubject = this.selectedSubject === subject ? null : subject;
  }

  
}
