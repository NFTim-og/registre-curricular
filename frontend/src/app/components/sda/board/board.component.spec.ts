import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BoardComponent } from './board.component';
import mockData from '../../../../assets/mockData.json';

describe('BoardComponent - Competences and Sabers', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;

    
    component.subjects = [
      'Llengua Catalana', 'Llengua Estrangera', 'Matemàtiques', 'Coneixement del medi natural, social i cultural', 'Educació Artística',
      'Educació Física', 'Educació en valors cívics i ètics', 'Competència ciutadana (CC)', 'Competència emprenedora (CE)', 'Competència digital (CD)',
    ];

    fixture.detectChanges();
  });

  it('should display subjects as clickable buttons', () => {
    const subjectButtons = fixture.debugElement.queryAll(By.css('.subject-button'));
    expect(subjectButtons.length).toBe(10); 

    const expectedSubjects = [
      'Llengua Catalana', 'Llengua Estrangera', 'Matemàtiques', 'Coneixement del medi natural, social i cultural', 'Educació Artística',
      'Educació Física', 'Educació en valors cívics i ètics', 'Competència ciutadana (CC)', 'Competència emprenedora (CE)', 'Competència digital (CD)',
    ];

    component.competencesData = [
      {
        id: 1,
        competencia: "Prendre consciència de la diversitat lingüística i cultural...",
        subject: "Llengua Catalana",
        criteris: [
          { id: 1.1, description: "Identificar les diferents llengües de l'entorn...", indicateurs: ["Descripció d'algunes expressions d'ús quotidià"] },
          { id: 1.2, description: "Detectar i rebutjar, de manera acompanyada...", indicateurs: ["Rebutjar estereotips i prejudicis lingüístics"] },
          { id: 1.3, description: "Descriure i valorar la pluralitat lingüística...", indicateurs: ["Identificació de la realitat pròxima"] }
        ]
      },
      {
        id: 2,
        competencia: "Comprendre et interpréter des textes oraux et multimodaux...",
        subject: "Llengua Catalana",
        criteris: [
          { id: 2.1, description: "Extreure informació rellevant de textos orals...", indicateurs: ["Extracció de la informació rellevant"] },
          { id: 2.2, description: "Reconèixer el tema, idees principals i missatges explícits...", indicateurs: ["Identificació de missatges explícits"] }
        ]
      },
      {
        id: 3,
        competencia: "Produire des textes oraux et multimodaux avec cohérence...",
        subject: "Llengua Catalana",
        criteris: [
          { id: 3.1, description: "Produir textos orals i multimodals coherents...", indicateurs: ["Producció de textos coherents"] }
        ]
      },
      {
        id: 4,
        competencia: "Comprendre et interpréter des textes écrits...",
        subject: "Llengua Catalana",
        criteris: [
          { id: 4.1, description: "Llegir textos propers...", indicateurs: ["Fluïdesa suficient en la lectura"] },
          { id: 4.2, description: "Comprendre textos escrits i multimodals...", indicateurs: ["Identificació del sentit global"] }
        ]
      },
      {
        id: 5,
        competencia: "Produire des textes écrits et multimodaux...",
        subject: "Llengua Catalana",
        criteris: [
          { id: 5.1, description: "Redactar textos escrits i multimodals...", indicateurs: ["Adequació, coherència i cohesió"] },
          { id: 5.2, description: "Aplicar estratègies de planificació...", indicateurs: ["Planificació i edició de textos"] }
        ]
      },
      {
        id: 6,
        competencia: "Cercar, seleccionar i contrastar informació...",
        subject: "Llengua Catalana",
        criteris: [
          { id: 6.1, description: "Aplicar estratègies de cerca d’informació...", indicateurs: ["Cerca d'informació a la xarxa i biblioteques"] }
        ]
      },
      {
        id: 7,
        competencia: "Seleccionar i llegir de manera autònoma obres diverses...",
        subject: "Llengua Catalana",
        criteris: [
          { id: 7.1, description: "Llegir de manera autònoma textos de diferents autors...", indicateurs: ["Lectura de llibres adaptats als seus gustos"] }
        ]
      },
      {
        id: 8,
        competencia: "Llegir, interpretar i analitzar obres literàries...",
        subject: "Llengua Catalana",
        criteris: [
          { id: 8.1, description: "Escoltar i llegir textos orals i escrits...", indicateurs: ["Descobriment dels elements essencials de l'obra"] }
        ]
      },
      {
        id: 9,
        competencia: "Reflexionar de forma guiada sobre el llenguatge...",
        subject: "Llengua Catalana",
        criteris: [
          { id: 9.1, description: "Formular conclusions elementals sobre la construcció de paraules...", indicateurs: ["Experimentació amb les paraules"] }
        ]
      },
      {
        id: 10,
        competencia: "Utilitzar un llenguatge no discriminatori...",
        subject: "Llengua Catalana",
        criteris: [
          { id: 10.1, description: "Rebutjar els usos lingüístics discriminatoris...", indicateurs: ["Reflexió grupal sobre els aspectes verbals"] }
        ]
      }
    ];

    fixture.detectChanges();
  });

  it('should toggle options for a clicked subject', () => {
    const subjectButton = fixture.debugElement.query(By.css('.subject-button'));
    subjectButton.nativeElement.click(); 
    fixture.detectChanges();

    const optionsSection = fixture.debugElement.query(By.css('.options-section'));
    expect(optionsSection).not.toBeNull();
    expect(optionsSection.nativeElement.textContent).toContain('Competences');
    expect(optionsSection.nativeElement.textContent).toContain('Sabers');

    subjectButton.nativeElement.click();
    fixture.detectChanges();

    const hiddenOptionsSection = fixture.debugElement.query(By.css('.options-section'));
    expect(hiddenOptionsSection).toBeNull();
  });

  it('should display Competences and Sabers sections when subject options are shown', () => {
    const subjectButton = fixture.debugElement.query(By.css('.subject-button'));
    subjectButton.nativeElement.click(); 
    fixture.detectChanges();

    const competencesButton = fixture.debugElement.query(By.css('.competences-button'));
    const sabersButton = fixture.debugElement.query(By.css('.sabers-button'));

    expect(competencesButton).not.toBeNull();
    expect(sabersButton).not.toBeNull();

    expect(competencesButton.nativeElement.textContent).toContain('Competences');
    expect(sabersButton.nativeElement.textContent).toContain('Sabers');
  });
  
  it('should display competences when Competences button is clicked', () => {
    const subjectButton = fixture.debugElement.query(By.css('.subject-button'));
    subjectButton.nativeElement.click();
    fixture.detectChanges();
  
    const competencesButton = fixture.debugElement.query(By.css('.competences-button'));
    competencesButton.nativeElement.click();
    fixture.detectChanges();
  
    const competencesSection = fixture.debugElement.query(By.css('.competences-section'));
    expect(competencesSection).not.toBeNull();
    expect(competencesSection.nativeElement.textContent).toContain('Competences');
  
    const sabersSection = fixture.debugElement.query(By.css('.sabers-section'));
    expect(sabersSection).toBeNull();  
  });
  
  it('should display sabers when Sabers button is clicked', () => {
    const subjectButton = fixture.debugElement.query(By.css('.subject-button'));
    subjectButton.nativeElement.click();
    fixture.detectChanges();
  
    const sabersButton = fixture.debugElement.query(By.css('.sabers-button'));
    sabersButton.nativeElement.click();
    fixture.detectChanges();
  
    const sabersSection = fixture.debugElement.query(By.css('.sabers-section'));
    expect(sabersSection).not.toBeNull();
    expect(sabersSection.nativeElement.textContent).toContain('Sabers');
  
    const competencesSection = fixture.debugElement.query(By.css('.competences-section'));
    expect(competencesSection).toBeNull();  
  }); 
  it('should display each competence with its number and title', () => {
    component.selectedSubject = 'Llengua Catalana';
    component.showCompetencesSection = true;
    component.competencesData = component.competences;
    fixture.detectChanges();

    const competenceItems = fixture.debugElement.queryAll(By.css('.competence-item'));
    expect(competenceItems.length).toBe(10); 

    const expectedCompetences = [
      '1 - Prendre consciència de la diversitat lingüística i cultural...',
      '2 - Comprendre et interpréter des textes oraux et multimodaux...',
      '3 - Produire des textes oraux et multimodaux avec cohérence...',
      '4 - Comprendre et interpréter des textes écrits...',
      '5 - Produire des textes écrits et multimodaux...',
      '6 - Cercar, seleccionar i contrastar informació...',
      '7 - Seleccionar i llegir de manera autònoma obres diverses...',
      '8 - Llegir, interpretar i analitzar obres literàries...',
      '9 - Reflexionar de forma guiada sobre el llenguatge...',
      '10 - Utilitzar un llenguatge no discriminatori...'
    ];

    competenceItems.forEach((item, index) => {
      expect(item.nativeElement.textContent.trim()).toContain(expectedCompetences[index]);
    });
  });

  it('should display criteris and indicateurs for each competence', () => {
    component.selectedSubject = 'Llengua Catalana';
    component.showCompetencesSection = true;
    component.competencesData = component.competences;
    fixture.detectChanges();

    const criteriItems = fixture.debugElement.queryAll(By.css('.criteri-item'));
    expect(criteriItems.length).toBeGreaterThan(0);
    
    const indicateurItems = fixture.debugElement.queryAll(By.css('.indicateur-item'));
    expect(indicateurItems.length).toBeGreaterThan(0);
    
    // Verificar el contenido del primer criteri e indicateur
    expect(criteriItems[0].nativeElement.textContent)
      .toContain("1.1 - Identificar les diferents llengües de l'entorn...");
    expect(indicateurItems[0].nativeElement.textContent)
      .toContain("Descripció d'algunes expressions d'ús quotidià");
  });
});
