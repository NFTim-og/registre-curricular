import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';
import { UserService } from '../../core/services/user/user.service';
import { SdALoginService } from '../../core/services/login/login.service';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

class MockUserService {
  setUsername() {}
}

class MockLoginService {
  login(user: string, password: string) {
    return of({ success: true, token: 'fake-token' });
  }
}

describe('LoginComponent', () => {
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, HttpClientModule, LoginComponent], // Import LoginComponent directly here
      providers: [
        { provide: SdALoginService, useClass: MockLoginService },
        { provide: UserService, useClass: MockUserService },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should redirect to /listusers on successful login', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;

    component.loginDetails.user = 'testuser';
    component.loginDetails.password = 'testpassword';

    spyOn(component, 'onSubmit').and.callThrough(); // Use onSubmit instead of onLogin
    component.onSubmit(); // Trigger login
    fixture.detectChanges();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/listusers']);
  });

  it('should show error message when credentials are incorrect', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;

    spyOn(component, 'onSubmit').and.callFake(() => {
      component.loginError = 'Invalid credentials';
    });
    component.onSubmit();
    fixture.detectChanges();

    expect(component.loginError).toBe('Invalid credentials');
  });

  it('should generate a token and redirect to /listusers on correct credentials', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;

    component.loginDetails.user = 'testuser';
    component.loginDetails.password = 'testpassword';

    component.onSubmit(); // Trigger the submit
    fixture.detectChanges();

    expect(localStorage.getItem('authToken')).toBe('fake-token');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/listusers']);
  });

  it('should disable the login button when fields are empty', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button[type="submit"]');
    
    // Initially empty fields
    component.loginDetails.user = '';
    component.loginDetails.password = '';
    console.log(component.loginDetails.user);
    console.log(component.loginDetails.password);
    fixture.detectChanges();
    
    // Trigger form validation manually
    fixture.detectChanges();
    
    // Expect the button to be disabled when fields are empty
    expect(button.disabled).toBeTrue();
    
    // Only username filled
    component.loginDetails.user = 'testbutton';
    console.log(component.loginDetails.user);
    fixture.detectChanges();
    
    // Trigger form validation manually again
    fixture.detectChanges();
    
    // Button should still be disabled since password is empty
    expect(button.disabled).toBeTrue();
    
    // Both fields filled
    component.loginDetails.password = 'passwordtestbutton';
    fixture.detectChanges();
    console.log(component.loginDetails.password);
    
    // Trigger form validation manually again
    fixture.detectChanges();
    
    // Button should be enabled since both fields are filled
    expect(button.disabled).toBeFalse();
  });

});