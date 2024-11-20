import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SdASabersComponent } from './sda-sabers.component';


describe('SdASabersComponent', () => {
  let component: SdASabersComponent;
  let fixture: ComponentFixture<SdASabersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SdASabersComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SdASabersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the SdASabersComponent', () => {
    expect(component).toBeTruthy();
  });
});
