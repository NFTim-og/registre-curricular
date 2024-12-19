import { TestBed } from '@angular/core/testing';

import { SdaListingService } from './sda-listing.service';

describe('SdaListingService', () => {
  let service: SdaListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdaListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
