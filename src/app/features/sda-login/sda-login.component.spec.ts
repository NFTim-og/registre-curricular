import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SdALoginComponent } from './sda-login.component';

// Mock data simulant une base de données
const MOCK_DATA = {
  user: 'prof@example.com',
  password: 'password123',
};

describe('SdALoginComponent - Correct Credentials', () => {
  let component: SdALoginComponent;
  let fixture: ComponentFixture<SdALoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SdALoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show success message when credentials are correct', () => {
    // Utiliser le mock data pour simuler des identifiants valides
    component.loginDetails.user = MOCK_DATA.user;
    component.loginDetails.password = MOCK_DATA.password;

    component.onSubmit();

    // Vérifier que l'erreur est nulle (succès)
    expect(component.loginError).toBeNull();
  });
});
