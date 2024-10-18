import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdaBasicInfoComponent } from './sda-basic-info.component';

describe('SdaBasicInfoComponent', () => {
  let component: SdaBasicInfoComponent;
  let fixture: ComponentFixture<SdaBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdaBasicInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdaBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
