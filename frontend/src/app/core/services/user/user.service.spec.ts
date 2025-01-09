import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });
    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);

    // Mock localStorage with proper typing
    spyOn(localStorage, 'getItem').and.callFake((key: string) => {
      if (key === 'authToken') return 'mockToken';
      return null;
    });
    spyOn(localStorage, 'removeItem');
  });

  afterEach(() => {
    httpTestingController.verify(); // Ensure no outstanding requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have an initial logged-in state of false', (done) => {
    service.isLoggedIn$.subscribe((isLoggedIn) => {
      expect(isLoggedIn).toBeFalse();
      done();
    });
  });

  it('should have an initial username of null', (done) => {
    service.username$.subscribe((username) => {
      expect(username).toBeNull();
      done();
    });
  });

  it('should set the username and update logged-in state to true', (done) => {
    service.setUsername('TestUser');

    service.isLoggedIn$.subscribe((isLoggedIn) => {
      expect(isLoggedIn).toBeTrue();
    });

    service.username$.subscribe((username) => {
      expect(username).toBe('TestUser');
      done();
    });
  });

  it('should clear the username and update logged-in state to false', (done) => {
    service.setUsername('TestUser');
    service.clearUsername();

    service.isLoggedIn$.subscribe((isLoggedIn) => {
      expect(isLoggedIn).toBeFalse();
    });

    service.username$.subscribe((username) => {
      expect(username).toBeNull();
      done();
    });
  });

  it('should correctly report logged-in state', () => {
    expect(service.isLoggedIn()).toBeFalse();

    service.setUsername('TestUser');
    expect(service.isLoggedIn()).toBeTrue();

    service.clearUsername();
    expect(service.isLoggedIn()).toBeFalse();
  });

  it('should call logout and send the correct HTTP request', (done) => {
    service.logout().subscribe((response) => {
      expect(response).toBeNull();
      done();
    });

    const req = httpTestingController.expectOne('/api/logout');
    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Authorization')).toBe('Bearer mockToken');
    req.flush(null); // Simulate a successful logout response
  });

  it('should handle logout when no token is present', (done) => {
    (localStorage.getItem as jasmine.Spy).and.returnValue(null); // Update the existing spy
  
    service.logout().subscribe((response) => {
      expect(response).toBeNull();
      done();
    });
  
    httpTestingController.expectNone('/api/logout'); // Ensure no HTTP call is made
  });  
});