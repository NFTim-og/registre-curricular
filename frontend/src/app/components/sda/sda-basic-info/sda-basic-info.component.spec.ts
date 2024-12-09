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
    expect(compiled.querySelector('div')?.textContent).toContain('SdA 1');
  })

  it('should display the description', () => {
    component.description = 'Description of the SdA 1';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div')?.textContent).toContain('Description of the SdA 1');
  })

  it('should have an url', () => {
    component.url = 'https://example.com'
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const link = compiled.querySelector('a');
    expect(link.href).toContain('https://example.com');
  })

  it('should display the img of the given url', () => {
    component.logoUrl = 'https://example.com/logo.png';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const img = compiled.querySelector('img');
    expect(img.src).toContain('https://example.com/logo.png');
  })
});
