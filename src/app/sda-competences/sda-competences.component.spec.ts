import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SdACompetencesComponent } from './sda-competences.component';
import { By } from '@angular/platform-browser';
import competencesData from '../../assets/competences.json';

describe('SdACompetencesComponent', () => {
  let component: SdACompetencesComponent;
  let fixture: ComponentFixture<SdACompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdACompetencesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SdACompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the SdACompetencesComponent', () => {
    expect(component).toBeTruthy();
  });

  interface Criteri {
    id: string;
    description: string;
  }

  interface Competence {
    id: number;
    description: string;
    criteres: Criteri[];
  }

  const competences: { competences: Competence[] } = competencesData;

  describe('Competences JSON', () => {
    it('Each skill must have an identifier, description and criteria', () => {
      competences.competences.forEach((competence) => {
        expect(competence.id).toBeDefined();
        expect(typeof competence.id).toBe('number');

        expect(competence.description).toBeDefined();
        expect(typeof competence.description).toBe('string');

        expect(competence.criteres).toBeDefined();
        expect(Array.isArray(competence.criteres)).toBe(true);
      });
    });

    it('Each criterion within the skills must have an identifier and a description', () => {
      competences.competences.forEach((competence) => {
        competence.criteres.forEach((criteri) => {
          expect(criteri.id).toBeDefined();
          expect(typeof criteri.id).toBe('string');

          expect(criteri.description).toBeDefined();
          expect(typeof criteri.description).toBe('string');
        });
      });
    });
  });

  it('should create checkboxes for each criteri inside competences', () => {
    const compiled = fixture.nativeElement;
    expect(component.competences.length).toBeGreaterThan(0);

    component.competences.forEach((competence: { criteres: any[]; }) => {
      competence.criteres.forEach((criteri) => {
        const checkbox = compiled.querySelector(
          `input[type="checkbox"][id="${criteri.id}"]`
        );
        expect(checkbox).toBeTruthy();
      });
    });
  });

  it('should toggle the checkbox state when clicked', () => {
    const firstCriteri = component.competences[0].criteres[0];
    const checkboxDebugElement = fixture.debugElement.query(
      By.css(`input[type="checkbox"][id="${firstCriteri.id}"]`)
    );

    const checkbox = checkboxDebugElement.nativeElement;
    checkbox.click();
    fixture.detectChanges();

    expect(checkbox.checked).toBeTrue();

    checkbox.click();
    fixture.detectChanges();

    expect(checkbox.checked).toBeFalse();
  });

  it('should update progress bar when checkboxes are clicked', () => {
    const firstCriteriCheckbox = fixture.debugElement.query(
      By.css(`input[type="checkbox"][id="1.1"]`)
    ).nativeElement;
    const progressBar = fixture.debugElement.query(
      By.css(`#progress-bar`)
    ).nativeElement;
  
    // Verifiquem que el progrés inicial sigui 0 per la competència
    expect(component.competences[0].progress).toBe(0);
    expect(progressBar.value).toBe(0);
  
    // Fem clic a la casella per marcar-la
    firstCriteriCheckbox.click();
    fixture.detectChanges(); // Actualitzem la vista
  
    // Verifiquem que el progrés ha augmentat després de fer clic
    expect(component.competences[0].progress).toBeGreaterThan(0);
    expect(progressBar.value).toBe(component.competences[0].progress);
  
    // Tornem a fer clic per desmarcar la casella
    firstCriteriCheckbox.click();
    fixture.detectChanges(); // Actualitzem la vista
  
    // Verifiquem que el progrés torni a 0
    expect(component.competences[0].progress).toBe(0);
    expect(progressBar.value).toBe(component.competences[0].progress);
  });
  
  
  it('should check competence checkbox when at least one criteri is checked', () => {
    const firstCriteri = component.competences[0].criteres[0];

    
    const competenceCheckbox = fixture.debugElement.query(
      By.css(`#competence-checkbox-0`)
    ).nativeElement;
    expect(competenceCheckbox.checked).toBeFalse();

    
    const checkbox = fixture.debugElement.query(
      By.css(`input[type="checkbox"][id="${firstCriteri.id}"]`)
    ).nativeElement;
    checkbox.click();
    fixture.detectChanges();

   
    expect(competenceCheckbox.checked).toBeTrue();
  });
  
  
  
  
});
