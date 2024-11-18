import { Component } from '@angular/core';

@Component({
  selector: 'app-sda-competences',
  templateUrl: './sda-competences.component.html',
  styleUrls: ['./sda-competences.component.css']
})
export class SdACompetencesComponent {
  competences = [
    {
      id: 1,
      description: "Prendre consciència de la diversitat lingüística i cultural a partir del reconeixement de les llengües de l'alumnat i la realitat plurilingüe i pluricultural per afavorir la transferència lingüística, identificar i rebutjar estereotips i prejudicis lingüístics i valorar aquesta diversitat com a font de riquesa cultural.",
      criteres: [
        {
          id: "1.1",
          description: "Identificar les diferents llengües de l'entorn, inclosa la llengua de signes, i les seves variants dialectals, a través de la descripció d'algunes expressions d'ús quotidià."
        },
        {
          id: "1.2",
          description: "Detectar i rebutjar, de manera acompanyada i en contextos senzills i propers, alguns prejudicis i estereotips lingüístics, de gènere i culturals molt freqüents."
        },
        {
          id: "1.3",
          description: "Descriure i valorar la pluralitat lingüística de l'entorn com a font de riquesa cultural, a partir de l'observació i la identificació de la realitat pròxima."
        }
      ]
    },
    {
      id: 2,
      description: "Comprendre i interpretar textos orals i multimodals, i identificar el sentit general i la informació més rellevant, valorant, de manera progressivament autònoma, aspectes formals i de contingut bàsics per construir coneixement, formar-se opinió i eixamplar les possibilitats de gaudi i lleure.",
      criteres: [
        {
          id: "2.1",
          description: "Extreure informació rellevant de textos orals i multimodals relacionats amb situacions d’aprenentatge i la vida quotidiana de l’aula."
        },
        {
          id: "2.2",
          description: "Reconèixer, de forma acompanyada, el tema, idees principals i missatges explícits de textos orals i multimodals. Iniciar-se, també de forma acompanyada, en la valoració del contingut i de la forma (elements no verbals)."
        }
      ]
    },
    {
      id: 3,
      description: "Produir textos orals i multimodals amb coherència, claredat i registre adequats, atenent les convencions pròpies dels diferents gèneres discursius, i participar en interaccions orals variades, amb autonomia, per expressar idees, sentiments, emocions i conceptes, construir coneixement i establir vincles personals.",
      criteres: [
        {
          id: "3.1",
          description: "Produir textos orals i multimodals coherents a partir d’una situació comunicativa propera (vivències, fets i aprenentatges), amb planificació acompanyada, adaptant el to de veu i el gest a la situació, i utilitzant recursos no verbals elementals i elements de suport."
        },
        {
          id: "3.2",
          description: "Participar en interaccions orals espontànies i en les situacions comunicatives habituals del context escolar, respectant les normes d’interacció oral, mostrant interès i respecte quan parlen els altres i iniciant-se en l’ús d’estratègies d'escolta activa."
        }
      ]
    }
  ];
}

