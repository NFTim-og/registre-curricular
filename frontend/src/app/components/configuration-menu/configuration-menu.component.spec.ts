import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ConfigurationMenuComponent } from './configuration-menu.component';
import { Renderer2 } from '@angular/core';

describe('ConfigurationMenuComponent', () => {
  let component: ConfigurationMenuComponent;
  let fixture: ComponentFixture<ConfigurationMenuComponent>;
  let rendererSpy: jasmine.SpyObj<Renderer2>;

  beforeEach(async () => {
    rendererSpy = jasmine.createSpyObj('Renderer2', ['addClass', 'removeClass']);

    await TestBed.configureTestingModule({
      imports: [FormsModule, ConfigurationMenuComponent],
      providers: [
        { provide: Renderer2, useValue: rendererSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigurationMenuComponent);
    component = fixture.componentInstance;
    component['renderer'] = rendererSpy;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Theme Toggle', () => {
    it('should initialize with light mode by default', () => {
      expect(component.isDarkMode).toBeFalse();
    });

    it('should toggle theme', () => {
      // Toggle to dark mode
      component.toggleTheme();
      fixture.detectChanges();
      
      expect(component.isDarkMode).toBeTrue();
      expect(rendererSpy.addClass).toHaveBeenCalledWith(document.body, 'dark-mode');
      
      // Toggle back to light mode
      component.toggleTheme();
      fixture.detectChanges();
      
      expect(component.isDarkMode).toBeFalse();
      expect(rendererSpy.removeClass).toHaveBeenCalledWith(document.body, 'dark-mode');
    });

    it('should display correct theme text based on mode', () => {
      const themeTextElement = () => fixture.debugElement.query(By.css('.theme-toggle > span:last-child'));
      
      // Initial state (light mode)
      fixture.detectChanges();
      expect(themeTextElement().nativeElement.textContent.trim()).toBe('Mode Clar');
      
      // Toggle to dark mode
      component.toggleTheme();
      fixture.detectChanges();
      
      expect(themeTextElement().nativeElement.textContent.trim()).toBe('Mode Fosc');
    });
  });

  describe('Language Selector', () => {
    it('should initialize with Catalan as default language', () => {
      expect(component.selectedLanguage).toBe('ca');
    });

    it('should change language when different option is selected', () => {
      const select = fixture.debugElement.query(By.css('select'));
      spyOn(console, 'log');
      
      // Change to Spanish
      select.nativeElement.value = 'es';
      select.nativeElement.dispatchEvent(new Event('change'));
      fixture.detectChanges();
      
      expect(component.selectedLanguage).toBe('es');
      expect(console.log).toHaveBeenCalledWith('Language changed to: Castellano');
      
      // Change back to Catalan
      select.nativeElement.value = 'ca';
      select.nativeElement.dispatchEvent(new Event('change'));
      fixture.detectChanges();
      
      expect(component.selectedLanguage).toBe('ca');
      expect(console.log).toHaveBeenCalledWith('Language changed to: Català');
    });

    it('should have both language options available', () => {
      const options = fixture.debugElement.queryAll(By.css('option'));
      
      expect(options.length).toBe(2);
      expect(options[0].nativeElement.value).toBe('ca');
      expect(options[1].nativeElement.value).toBe('es');
    });
  });

  describe('Component Template', () => {
    it('should have correct heading text', () => {
      const heading = fixture.debugElement.query(By.css('h2'));
      expect(heading.nativeElement.textContent).toBe('Configuració');
    });

    it('should have properly bound form controls', () => {
      const checkbox = fixture.debugElement.query(By.css('input[type="checkbox"]'));
      const select = fixture.debugElement.query(By.css('select'));
      
      expect(checkbox.nativeElement.checked).toBeFalse();
      expect(select.nativeElement.value).toBe('ca');
    });
  });
});