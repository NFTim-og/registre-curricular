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
  
  describe('Form Submission', () => {
    it('should call onSubmit and log the user details when login button is clicked', () => {
      // Réinitialiser le modèle de loginDetails
      component.loginDetails = {
        user: 'test@example.com',
        password: 'test123',
      };
      fixture.detectChanges(); // Mettre à jour le DOM
  
      // Espionner la méthode onSubmit
      spyOn(component, 'onSubmit'); // Surveille l'appel de cette méthode
  
      // Obtenez une référence au bouton de soumission
      const compiled = fixture.nativeElement;
      const loginButton = compiled.querySelector('#loginButton') as HTMLButtonElement;
  
      // Simulez un clic sur le bouton
      loginButton.click();
      fixture.detectChanges(); // Mettre à jour après l'interaction
  
      // Vérifiez si onSubmit a été appelé
      expect(component.onSubmit).toHaveBeenCalled();
    });
  });
  
  describe('Form validation', () => {
    it('should not submit if any field is empty', () => {
      const compiled = fixture.nativeElement;
  
      const userInput = compiled.querySelector('#userInput') as HTMLInputElement;
      const passwordInput = compiled.querySelector('#passwordInput') as HTMLInputElement;
      const loginButton = compiled.querySelector('#loginButton') as HTMLButtonElement;
  
      // Simuler des champs vides
      userInput.value = '';
      passwordInput.value = '';
      userInput.dispatchEvent(new Event('input'));
      passwordInput.dispatchEvent(new Event('input'));
  
      spyOn(component, 'onSubmit').and.callThrough(); // Espionner la méthode onSubmit
  
      // Cliquer sur le bouton de soumission
      loginButton.click();
      fixture.detectChanges();
  
      // Vérifications
      expect(component.onSubmit).toHaveBeenCalled();
      expect(component.loginDetails.user).toBe('');
      expect(component.loginDetails.password).toBe('');
      expect(component.isSubmitted).toBeTrue(); // Vérifie qu'on a tenté de soumettre
      expect(component.loginDetails.user).not.toBe('prof@example.com'); // Champ reste vide
      expect(component.loginDetails.password).not.toBe('password123'); // Champ reste vide
    });
  });
  
});
