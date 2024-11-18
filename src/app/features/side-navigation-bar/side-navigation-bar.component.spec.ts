import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigationBarComponent } from './side-navigation-bar.component';
import { By } from '@angular/platform-browser';

describe('SideNavigationBarComponent', () => {
  let component: SideNavigationBarComponent;
  let fixture: ComponentFixture<SideNavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavigationBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title "EduApp"', () => {
    const title = fixture.debugElement.query(By.css('.title')).nativeElement;
    expect(title.textContent).toContain('EduApp');
  });
  
});
