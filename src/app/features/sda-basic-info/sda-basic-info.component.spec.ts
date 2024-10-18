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

  it('should display the title', () => {
    component.title = 'SdA 1';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('SdA 1');
  })

  it('should display the description', () => {
    component.description = 'Description of the SdA 1';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Description of the SdA 1');
  })
});
