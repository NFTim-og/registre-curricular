import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
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
});