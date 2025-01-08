import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BoardComponent } from './board.component';
import mockData from '../../../../assets/mockData.json';

describe('BoardComponent - Subjects as Buttons', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    }).compileComponents();

    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;

    // Initialiser 10 matières
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
    subjectButton.nativeElement.click(); // Clic sur une matière
    fixture.detectChanges();

    // Vérifie que les options contiennent bien "Competences" et "Sabers"
    const competencesButton = fixture.debugElement.query(By.css('.competences-button'));
    const sabersButton = fixture.debugElement.query(By.css('.sabers-button'));

    expect(competencesButton).not.toBeNull();
    expect(sabersButton).not.toBeNull();

    expect(competencesButton.nativeElement.textContent).toContain('Competences');
    expect(sabersButton.nativeElement.textContent).toContain('Sabers');
  });

  describe('Mock Data Test', () => {
    it('should contain competences with correct structure and data', () => {
      const competences = mockData.competences;
      
      expect(competences.length).toBe(10); 
      expect(competences[0].id).toBeDefined(); 
      expect(competences[0].competencia).toBeDefined(); 
      expect(competences[0].criteris.length).toBe(3); 
      expect(competences[0].criteris[0].id).toBeDefined(); 
      expect(competences[0].criteris[0].description).toBeDefined(); 
      
      // Vérification de l'indicateur de la première sous-compétence
      expect(competences[0].criteris[0].indicateurs).toContain("Descripció d'algunes expressions d'ús quotidià");
    });
  
    it('should contain sabers with correct structure and data', () => {
      const sabers = mockData.sabers;
  
      expect(sabers.length).toBe(5); 
      expect(sabers[0].id).toBeDefined(); 
      expect(sabers[0].saber).toBeDefined(); 
      expect(sabers[0].sabers.length).toBe(2); 
      expect(sabers[0].sabers[0].id).toBeDefined(); 
      expect(sabers[0].sabers[0].description).toBeDefined(); 
    });
  });
  
});
