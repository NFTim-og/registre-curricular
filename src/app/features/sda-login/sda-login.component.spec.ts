import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdaLoginComponent } from './sda-login.component';

describe('SdaLoginComponent', () => {
  let component: SdaLoginComponent;
  let fixture: ComponentFixture<SdaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdaLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
