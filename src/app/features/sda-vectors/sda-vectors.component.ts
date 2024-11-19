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
}
