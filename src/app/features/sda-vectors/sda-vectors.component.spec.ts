import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdaVectorsComponent } from './sda-vectors.component';

describe('SdaVectorsComponent', () => {
  let component: SdaVectorsComponent;
  let fixture: ComponentFixture<SdaVectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdaVectorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdaVectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
