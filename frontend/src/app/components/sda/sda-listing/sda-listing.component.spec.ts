import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdaListingComponent } from './sda-listing.component';

describe('SdaListingComponent', () => {
  let component: SdaListingComponent;
  let fixture: ComponentFixture<SdaListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdaListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdaListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
