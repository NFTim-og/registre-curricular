import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopNavigationComponent } from './top-navigation.component';
import { UserService } from '../../core/services/user/user.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('TopNavigationComponent', () => {
  let component: TopNavigationComponent;
  let fixture: ComponentFixture<TopNavigationComponent>;
  let userServiceMock: jasmine.SpyObj<UserService>;
  let routerMock: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    userServiceMock = jasmine.createSpyObj('UserService', ['clearUsername'], {
      username$: of('TestUser'),
    });
    routerMock = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [TopNavigationComponent],
      providers: [
        { provide: UserService, useValue: userServiceMock },
        { provide: Router, useValue: routerMock }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TopNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to username$ and set username', () => {
    expect(component.username).toBe('TestUser');
  });

  it('should call clearUsername and redirect on logout', () => {
    component.logout();

    expect(userServiceMock.clearUsername).toHaveBeenCalled();
    expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
  });
});