import { Component } from '@angular/core';

@Component({
  selector: 'app-sda-vectors',
  imports: [],
  templateUrl: './sda-vectors.component.html',
  styleUrl: './sda-vectors.component.css'
})
export class SdaVectorsComponent {
  vectors = [
    { name: 'Aprenentatges competencials', mark: false },
    { name: 'Perspectiva de gènere', mark: false },
    { name: "Qualitat de l'educació de les llengües", mark: false },
    { name: 'Benestar emocional', mark: false },
    { name: 'Universalitat del currículum', mark: false },
    { name: 'Ciutadania democràtica i consciència global', mark: false },
  ];

  updateVector(index: number, event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.vectors[index].mark = checkbox.checked;
  }

  completePercentage(): number {
    const marcats = this.vectors.filter((vector) => vector.mark).length;
    return Math.round((marcats / this.vectors.length) * 100);
  }
}
