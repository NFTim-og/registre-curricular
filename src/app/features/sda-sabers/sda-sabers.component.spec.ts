import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdaSabersComponent } from './sda-sabers.component';

describe('SdaSabersComponent', () => {
  let component: SdaSabersComponent;
  let fixture: ComponentFixture<SdaSabersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdaSabersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdaSabersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
