import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BoardComponent } from './board.component';
import mockData from '../../../../assets/mockData.json';

describe('BoardComponent - Competences and Sabers', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    }).compileComponents();

    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;

    
    component.subjects = [
      'English', 'Math', 'Science', 'History', 'Geography',
      'Art', 'Music', 'Physical Education', 'French', 'Computer Science',
    ];

    fixture.detectChanges();
  });

  it('should display subjects as clickable buttons', () => {
    const subjectButtons = fixture.debugElement.queryAll(By.css('.subject-button'));
    expect(subjectButtons.length).toBe(10); // Vérifie qu'il y a 10 boutons pour les matières

    const expectedSubjects = [
      'English', 'Math', 'Science', 'History', 'Geography',
      'Art', 'Music', 'Physical Education', 'French', 'Computer Science',
    ];

    // Vérifie que chaque bouton correspond à une matière
    subjectButtons.forEach((button, index) => {
      expect(button.nativeElement.textContent).toContain(expectedSubjects[index]);
    });
  });

  it('should toggle options for a clicked subject', () => {
    const subjectButton = fixture.debugElement.query(By.css('.subject-button'));
    subjectButton.nativeElement.click(); // Simuler un clic sur un bouton de matière
    fixture.detectChanges();

    // Vérifie que la section des options (Compétences et Sabers) est affichée
    const optionsSection = fixture.debugElement.query(By.css('.options-section'));
    expect(optionsSection).not.toBeNull();
    expect(optionsSection.nativeElement.textContent).toContain('Competences');
    expect(optionsSection.nativeElement.textContent).toContain('Sabers');

    // Clic à nouveau pour masquer les options
    subjectButton.nativeElement.click();
    fixture.detectChanges();

    // Vérifie que la section des options est masquée
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
  });
  
});
