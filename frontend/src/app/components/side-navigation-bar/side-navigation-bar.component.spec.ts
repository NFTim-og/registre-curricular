import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideNavigationBarComponent } from './side-navigation-bar.component';
import { By } from '@angular/platform-browser';

describe('SideNavigationBarComponent', () => {
  let component: SideNavigationBarComponent;
  let fixture: ComponentFixture<SideNavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    }).compileComponents();

    fixture = TestBed.createComponent(SideNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title "EduApp"', async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const title = fixture.debugElement.query(By.css('.title'));
    expect(title).toBeTruthy();
    expect(title.nativeElement.textContent).toContain('EduApp');
  });

  it('should display the "Visió General" section', async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const section = fixture.debugElement.query(By.css('li[routerLink="/visio-general"]'));
    expect(section).toBeTruthy();
    expect(section.nativeElement.textContent).toContain('Visió General');
  });

  it('should display the "Els Meus Cursos" section', async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const section = fixture.debugElement.query(By.css('.courses-toggle'));
    expect(section).toBeTruthy();
    expect(section.nativeElement.textContent).toContain('Els Meus Cursos');
  });

  it('should toggle subsections when "Els Meus Cursos" is clicked', async () => {
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

  it('should display the "SdAs Compartides" section', async () => {
    await fixture.whenStable(); // Ensure that all async operations have finished
    fixture.detectChanges();    // Detect changes and update the view
    
    const section = fixture.debugElement.query(By.css('li[routerLink="/sdas-compartides"]'));
    
    // Check if the section is found
    expect(section).toBeTruthy();
    expect(section.nativeElement.textContent).toContain('SdAs Compartides');
  });
  
  it('should display the "Configuració" section', async () => {
    await fixture.whenStable(); // Ensure that all async operations have finished
    fixture.detectChanges();    // Detect changes and update the view
    
    const section = fixture.debugElement.query(By.css('li[routerLink="/configuracio"]'));
    
    // Check if the section is found
    expect(section).toBeTruthy();
    expect(section.nativeElement.textContent).toContain('Configuració');
  });
  
  afterEach(() => {
    console.log(fixture.debugElement.nativeElement.innerHTML);
  });
});
