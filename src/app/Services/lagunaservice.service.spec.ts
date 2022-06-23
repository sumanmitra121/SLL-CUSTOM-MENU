import { TestBed } from '@angular/core/testing';

import { LagunaserviceService } from './lagunaservice.service';

describe('LagunaserviceService', () => {
  let service: LagunaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LagunaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
