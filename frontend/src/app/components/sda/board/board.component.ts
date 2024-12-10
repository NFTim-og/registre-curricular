import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  isEnglishSelected: boolean = false;

  onEnglishClick(): void {
    this.isEnglishSelected = true;
  }

  onCompetencesClick(): void {
    console.log('Compétences clicked');
  }

  onSabersClick(): void {
    console.log('Sabers clicked');
  }
}
