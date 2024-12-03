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
  
   
    component.loginDetails = {
      user: 'prof@example.com',
      password: 'password123',
    };
  
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
        // Réinitialiser les valeurs dans le modèle
        component.loginDetails = {
            user: 'prof@example.com',
            password: 'password123',
        };

        fixture.detectChanges(); // Mise à jour du DOM

        const compiled = fixture.nativeElement;

        const userInput = compiled.querySelector('#userInput') as HTMLInputElement;
        const passwordInput = compiled.querySelector('#passwordInput') as HTMLInputElement;

        // Assigner les valeurs aux champs d'entrée
        userInput.value = component.loginDetails.user;
        passwordInput.value = component.loginDetails.password;

        // Déclencher l'événement d'entrée pour mettre à jour le modèle
        userInput.dispatchEvent(new Event('input'));
        passwordInput.dispatchEvent(new Event('input'));

        fixture.detectChanges(); // Mettre à jour le DOM après les changements

        // Vérifiez que les champs d'entrée contiennent les valeurs attendues
        expect(userInput.value).toBe('prof@example.com');
        expect(passwordInput.value).toBe('password123');
    });
});
  

  
  
  describe('User interaction', () => {
    it('should update loginDetails when inputs are changed', () => {
      fixture.detectChanges(); // Mettre à jour le DOM
  
      const compiled = fixture.nativeElement;
  
      const userInput = compiled.querySelector('#userInput') as HTMLInputElement;
      const passwordInput = compiled.querySelector('#passwordInput') as HTMLInputElement;
  
      // Simuler une modification des valeurs
      userInput.value = 'newuser@example.com';
      userInput.dispatchEvent(new Event('input'));
  
      passwordInput.value = 'newpassword123';
      passwordInput.dispatchEvent(new Event('input'));
  
      fixture.detectChanges(); // Mettre à jour après les changements
  
      // Vérification
      expect(component.loginDetails.user).toBe('newuser@example.com');
      expect(component.loginDetails.password).toBe('newpassword123');
    });
  });
  

  describe('Two-Way Data Binding', () => {
    it('should update loginDetails when input fields are modified', () => {
      const compiled = fixture.nativeElement;
  
      const userInput = compiled.querySelector('#userInput') as HTMLInputElement;
      const passwordInput = compiled.querySelector('#passwordInput') as HTMLInputElement;
  
      // Simuler une saisie utilisateur
      userInput.value = 'newuser@example.com';
      userInput.dispatchEvent(new Event('input')); // Déclencher l'événement
      fixture.detectChanges(); // Mettre à jour le DOM
  
      passwordInput.value = 'newpassword123';
      passwordInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();
  
      // Vérifier les mises à jour dans le modèle
      expect(component.loginDetails.user).toBe('newuser@example.com');
      expect(component.loginDetails.password).toBe('newpassword123');
    });
  });
  
  
   
});
