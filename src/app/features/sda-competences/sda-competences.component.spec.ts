import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SdACompetencesComponent } from './sda-competences.component';
import { By } from '@angular/platform-browser';
import competencesData from '../../../assets/competences.json';
describe('SdACompetencesComponent', () => {
  let component: SdACompetencesComponent;
  let fixture: ComponentFixture<SdACompetencesComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Importa el component autònom en lloc de declarar-lo
      imports: [SdACompetencesComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(SdACompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create the SdACompetencesComponent', () => {
    expect(component).toBeTruthy();
  });
  // Definició dels tipus explícits basats en el JSON
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
    // Verifica que hi ha competències
    expect(component.competences.length).toBeGreaterThan(0);
    // Itera sobre les competències i els criteris per verificar els checkboxos
    component.competences.forEach((competence: { criteres: any[]; }) => {
      competence.criteres.forEach((criteri) => {
        const checkbox = compiled.querySelector(
          `input[type="checkbox"][id="${criteri.id}"]`
        );
        // Comprova que el checkbox existeix al DOM
        expect(checkbox).toBeTruthy();
      });
    });
  });
  it('should toggle the checkbox state when clicked', () => {
    const firstCriteri = component.competences[0].criteres[0];
    // Trobar el checkbox al DOM
    const checkboxDebugElement = fixture.debugElement.query(
      By.css(`input[type="checkbox"][id="${firstCriteri.id}"]`)
    );
    const checkbox = checkboxDebugElement.nativeElement;
    // Simula el clic
    checkbox.click();
    fixture.detectChanges();
    // Verifica que el checkbox està marcat
    expect(checkbox.checked).toBeTrue();
    // Torna a simular el clic per desmarcar
    checkbox.click();
    fixture.detectChanges();
    // Verifica que el checkbox no està marcat
    expect(checkbox.checked).toBeFalse();
  });
  it('should update progress bar when checkboxes are clicked', () => {
    const firstCriteriCheckbox = fixture.debugElement.query(
      By.css(`input[type="checkbox"][id="1.1"]`)
    ).nativeElement;
    const progressBar = fixture.debugElement.query(
      By.css('#progress-bar')
    ).nativeElement;
  
    // Vérifier la progression initiale
    expect(component.progress).toBe(0);
    expect(progressBar.value).toBe(0);
  
    // Simuler un clic sur un checkbox
    firstCriteriCheckbox.click();
    fixture.detectChanges();
  
    // Vérifier que la progression a augmenté
    expect(component.progress).toBeGreaterThan(0);
    expect(progressBar.value).toBe(component.progress);
  });
});