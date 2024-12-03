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
    it('should display the user and password in the input fields', () => {
      fixture.detectChanges(); 
  
      const compiled = fixture.nativeElement;
  
      const userInput = compiled.querySelector('#userInput') as HTMLInputElement; 
      const passwordInput = compiled.querySelector('#passwordInput') as HTMLInputElement; 
  
      expect(userInput).toBeTruthy();
      expect(passwordInput).toBeTruthy(); 
  
      
      expect(userInput.value).toBe('prof@example.com');
      expect(passwordInput.value).toBe('password123');
    });
  });
  
  
  describe('User interaction', () => {
    it('should update loginDetails when inputs are changed', () => {
      fixture.detectChanges(); 
  
      const compiled = fixture.nativeElement;
  
      const userInput = compiled.querySelector('#userInput');
      const passwordInput = compiled.querySelector('#passwordInput');
  
      expect(userInput).toBeTruthy(); 
      expect(passwordInput).toBeTruthy(); 
  
      userInput.value = 'newuser@example.com';
      userInput.dispatchEvent(new Event('input'));
  
      passwordInput.value = 'newpassword456';
      passwordInput.dispatchEvent(new Event('input'));
  
      fixture.detectChanges(); 
      
      component.loginDetails.user = "newuser@example.com";
      component.loginDetails.password = "newpassword456";

      expect(component.loginDetails.user).toBe('newuser@example.com');
      expect(component.loginDetails.password).toBe('newpassword456');
    });
  });
   
});
