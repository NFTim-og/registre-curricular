import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { SdaLoginService } from './sda-login.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('SdALoginService', () => {
  let service: SdaLoginService;
  let httpMock: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SdaLoginService,
        provideHttpClientTesting(),  
      ],
    });
    service = TestBed.inject(SdaLoginService);
    httpMock = TestBed.inject(HttpClient);
  });

  it('should send login request to backend and return response', () => {
    const mockResponse = { success: true, message: 'Login successful' };
    const user = 'test@example.com';
    const password = 'test123';

    service.login(user, password).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('http://localhost:3000/api/login');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ user, password });
    req.flush(mockResponse);
  });
});
