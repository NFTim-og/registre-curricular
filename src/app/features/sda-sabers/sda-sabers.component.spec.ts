import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SdASabersComponent } from './sda-sabers.component';
import sabersData from '../../../assets/sabers.json';

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
});