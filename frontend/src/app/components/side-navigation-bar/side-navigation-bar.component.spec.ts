import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideNavigationBarComponent } from './side-navigation-bar.component';
import { By } from '@angular/platform-browser';

describe('SideNavigationBarComponent', () => {
  let component: SideNavigationBarComponent;
  let fixture: ComponentFixture<SideNavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavigationBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title "EduApp"', () => {
    const title = fixture.debugElement.query(By.css('.title')).nativeElement;
    expect(title.textContent).toContain('EduApp');
  });

  it('should display the "Visió General" section', () => {
    const section = fixture.debugElement.query(By.css('.general')).nativeElement;
    expect(section.textContent).toContain('Visió General');
  });  
  
  it('should display the "Els meus Cursos" section', () => {
    const section = fixture.debugElement.query(By.css('.courses-toggle')).nativeElement;
    expect(section.textContent).toContain('Els meus Cursos');
  });  
  
  it('should toggle subsections when "Els meus Cursos" is clicked', () => {
    const toggleButton = fixture.debugElement.query(By.css('.courses-toggle'));
    toggleButton.triggerEventHandler('click', null); 
    fixture.detectChanges();
  
    const subsections = fixture.debugElement.query(By.css('.subsections'));
    expect(subsections).toBeTruthy(); 

    toggleButton.triggerEventHandler('click', null);
    fixture.detectChanges();
  
    const hiddenSubsections = fixture.debugElement.query(By.css('.subsections'));
    expect(hiddenSubsections).toBeFalsy();
  });

  it('should display the "SdAs Compartides" section', () => {
    const section = fixture.debugElement.query(By.css('.shared')).nativeElement;
    expect(section.textContent).toContain('SdAs Compartides');
  });
  
  it('should display the "Configuració" section', () => {
    const section = fixture.debugElement.query(By.css('.settings')).nativeElement;
    expect(section.textContent).toContain('Configuració');
  });
  
});
