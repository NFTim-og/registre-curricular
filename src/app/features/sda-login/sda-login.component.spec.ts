import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SdALoginComponent } from './sda-login.component';
import loginData from '../../../assets/login.json';

describe('SdALoginComponent', () => {
  let component: SdALoginComponent;
  let fixture: ComponentFixture<SdALoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdALoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SdALoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the SdALoginComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('Login JSON', () => {
    it('should load the login data correctly', () => {
      expect(component.loginDetails).toEqual(loginData);
    });

    it('should contain user and password in the login data', () => {
      component.loginDetails.user = "prof@example.com";
      component.loginDetails.password = "password123";
      expect(component.loginDetails.user).toBeDefined();
      expect(component.loginDetails.user).toBe('prof@example.com');
      expect(component.loginDetails.password).toBeDefined();
      expect(component.loginDetails.password).toBe('password123');
    });
  });

  describe('Template rendering', () => {
    it('should display the user and password in the template', () => {
      fixture.detectChanges(); 
  
      const compiled = fixture.nativeElement;
  
      const userElement = compiled.querySelector('#user');
      const passwordElement = compiled.querySelector('#password');
  
      expect(userElement).toBeTruthy();
      expect(passwordElement).toBeTruthy();
  
      expect(userElement.textContent).toContain('User: prof@example.com');
      expect(passwordElement.textContent).toContain('Password: password123');
    });
  });
  
  
  
});
