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
  
  it('should display the "Els meus Cursos" section', () => {
    const section = fixture.debugElement.query(By.css('.courses')).nativeElement;
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
});
