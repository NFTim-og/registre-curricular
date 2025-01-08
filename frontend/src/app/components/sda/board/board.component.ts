import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
