import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SdaVectorsComponent } from './sda-vectors.component';

describe('VectorsChecklistComponent', () => {
  let component: SdaVectorsComponent;
  let fixture: ComponentFixture<SdaVectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SdaVectorsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SdaVectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('It must have 6 vectors initialized as not marked', () => {
    expect(component.vectors.length).toBe(6);
    expect(component.vectors.every((vector) => !vector.marca)).toBeTrue();
  });
});

