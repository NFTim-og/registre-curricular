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

    it('should contain `usuari` and `contrasenya` in the login data', () => {
      expect(component.loginDetails.usuari).toBeDefined();
      expect(component.loginDetails.usuari).toBe('prof@example.com');
      expect(component.loginDetails.contrasenya).toBeDefined();
      expect(component.loginDetails.contrasenya).toBe('password123');
    });
  });
});
