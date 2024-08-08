import { TestBed } from '@angular/core/testing';

import { PricingserviceService } from './pricingservice.service';

describe('PricingserviceService', () => {
  let service: PricingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PricingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
