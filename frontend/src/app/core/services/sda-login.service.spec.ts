import { TestBed } from '@angular/core/testing';
import { SdALoginService } from './sda-login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';  

describe('SdALoginService', () => {
  let service: SdALoginService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SdALoginService],
    });
    service = TestBed.inject(SdALoginService);
    httpMock = TestBed.inject(HttpTestingController); 
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should send login request to backend and return response', () => {
    const mockResponse = { success: true, message: 'Login successful' };
    const user = 'test@example.com';
    const password = 'test123';

    service.login(user, password).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('http://localhost:3000/api/v1/login');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ user, password });

    req.flush(mockResponse); 
  });
});
