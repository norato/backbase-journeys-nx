import { TestBed } from '@angular/core/testing';

import { ExchangeRatesJourneyService } from './exchange-rates-journey.service';

describe('ExchangeRatesJourneyService', () => {
  let service: ExchangeRatesJourneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeRatesJourneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
