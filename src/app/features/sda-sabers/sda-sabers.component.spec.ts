import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SdASabersComponent } from './sda-sabers.component';
import sabersData from '../../../assets/sabers.json';
import { By } from '@angular/platform-browser';

describe('SdASabersComponent', () => {
  let component: SdASabersComponent;
  let fixture: ComponentFixture<SdASabersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdASabersComponent] // Cambiado a imports
    }).compileComponents();

    fixture = TestBed.createComponent(SdASabersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the SdASabersComponent', () => {
    expect(component).toBeTruthy();
  });

  interface Saber {
    id: number; 
    description: string;
  }

  interface SaberCategory {
    id: number;
    name: string;
    sabers: Saber[];
  }

  const sabers: { categories: SaberCategory[] } = sabersData;

  describe('Sabers JSON', () => {
    it('Each category must have an id, name, and list of sabers', () => {
      sabers.categories.forEach((category) => {
        expect(category.id).toBeDefined();
        expect(typeof category.id).toBe('number');
        expect(category.name).toBeDefined();
        expect(typeof category.name).toBe('string');
        expect(category.sabers).toBeDefined();
        expect(Array.isArray(category.sabers)).toBe(true);
      });
    });
  });

  it('Each saber inside categories must have an id and description', () => {
    const sabers: { categories: SaberCategory[] } = sabersData; // Definir 'sabers' aquí
    sabers.categories.forEach((category) => {
      category.sabers.forEach((saber) => {
        expect(saber.id).toBeDefined();
        expect(typeof saber.id).toBe('number');
        expect(saber.description).toBeDefined();
        expect(typeof saber.description).toBe('string');
      });
    });
  });

  it('should create checkboxes for each saber inside categories', () => {
    const compiled = fixture.nativeElement;
    expect(component.sabersCategories.length).toBeGreaterThan(0);
  
    component.sabersCategories.forEach((category: { sabers: any[]; }) => {
      category.sabers.forEach((saber) => {
        const checkbox = compiled.querySelector(
          `input[type="checkbox"][id="${saber.id}"]`
        );
        expect(checkbox).toBeTruthy(); 
      });
    });
  });

  it('should toggle the checkbox state when clicked', () => {
    const firstSaber = component.sabersCategories[0].sabers[0];
    const checkboxDebugElement = fixture.debugElement.query(
      By.css(`input[type="checkbox"][id="${firstSaber.id}"]`)
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
    const firstSaberCheckbox = fixture.debugElement.query(
      By.css(`input[type="checkbox"][id="1.1"]`)
    ).nativeElement;
    const progressBar = fixture.debugElement.query(
      By.css('#progress-bar')
    ).nativeElement;
  
    expect(component.progress).toBe(0);
    expect(progressBar.value).toBe(0);
  
    firstSaberCheckbox.click();
    fixture.detectChanges();
  
    expect(component.progress).toBeGreaterThan(0);
    expect(progressBar.value).toBe(component.progress);
  
    firstSaberCheckbox.click();
    fixture.detectChanges();
  
    expect(component.progress).toBe(0);
    expect(progressBar.value).toBe(0);
  });
  
});