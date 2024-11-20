import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SdASabersComponent } from './sda-sabers.component';
import sabersData from '../../../assets/sabers.json';


describe('SdASabersComponent', () => {
  let component: SdASabersComponent;
  let fixture: ComponentFixture<SdASabersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SdASabersComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SdASabersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the SdASabersComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('Sabers JSON', () => {
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
});
