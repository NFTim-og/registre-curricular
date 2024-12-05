import { TestBed } from '@angular/core/testing';

import { SdaLoginService } from './sda-login.service';

describe('SdaLoginService', () => {
  let service: SdaLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdaLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
