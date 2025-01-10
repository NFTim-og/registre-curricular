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

    subjectButtons.forEach((button, index) => {
      expect(button.nativeElement.textContent).toContain(expectedSubjects[index]);
    });
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
      expect(item.nativeElement.textContent).toContain(expectedCompetences[index]);
    });
  });
});
