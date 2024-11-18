import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SdACompetencesComponent } from './sda-competences.component';

describe('SdACompetencesComponent', () => {
  let component: SdACompetencesComponent;
  let fixture: ComponentFixture<SdACompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SdACompetencesComponent] // Utilitza 'declarations' en lloc de 'imports'
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdACompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
