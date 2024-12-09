import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { SdALoginService } from '../../core/services/sda-login.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';


// Mock data simulant une base de données
const MOCK_DATA = {
  user: 'prof@example.com',
  password: 'password123',
};

class MockRouter {
  url: string = '';
  navigate(commands: string[]): void {
    this.url = commands[0];
  }
}

class MockLoginService {
  login(user: string, password: string) {
    if (user === 'prof@example.com' && password === 'password123') {
      return of({ success: true });
    }
    return of({ success: false });
  }
}

describe('SdALoginComponent - Correct Credentials', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: MockRouter;

  beforeEach(async () => {
    router = new MockRouter();
    await TestBed.configureTestingModule({
      
      imports: [FormsModule],
      providers: [
        { provide: SdALoginService, useClass: MockLoginService },
        { provide: Router, useValue: router },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should redirect to /listusers on successful login', () => {
    component.loginDetails.user = 'prof@example.com';
    component.loginDetails.password = 'password123';

    component.onSubmit();

    expect(router.url).toBe('/listusers');
    expect(component.loginError).toBeNull();
  });

  it('should show error message when credentials are incorrect', () => {
    // Simuler des identifiants incorrects
    component.loginDetails.user = 'wronguser@example.com';
    component.loginDetails.password = 'wrongpassword';

    component.onSubmit();

    // Vérifier que le message d'erreur s'affiche
    expect(router.url).toBe('');
    expect(component.loginError).toBe('An unexpected error occurred.');
  });

  it('should disable the login button when fields are empty', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button[type="submit"]');
  
    
    component.loginDetails.user = '';
    component.loginDetails.password = '';
    fixture.detectChanges(); 
  
    expect(button.disabled).toBeTrue(); 
  
    
    component.loginDetails.user = 'prof@example.com';
    fixture.detectChanges();
  
    expect(button.disabled).toBeTrue(); 
  
    
    component.loginDetails.password = 'password123';
    fixture.detectChanges();
  
    expect(button.disabled).toBeTrue(); 
  });
  
});
