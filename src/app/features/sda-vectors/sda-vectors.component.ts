import { Component } from '@angular/core';

@Component({
  selector: 'app-sda-vectors',
  imports: [],
  templateUrl: './sda-vectors.component.html',
  styleUrl: './sda-vectors.component.css'
})
export class SdaVectorsComponent {
  vectors = [
    { nom: 'Aprenentatges competencials', marca: false },
    { nom: 'Perspectiva de gènere', marca: false },
    { nom: "Qualitat de l'educació de les llengües", marca: false },
    { nom: 'Benestar emocional', marca: false },
    { nom: 'Universalitat del currículum', marca: false },
    { nom: 'Ciutadania democràtica i consciència global', marca: false },
  ];
}
