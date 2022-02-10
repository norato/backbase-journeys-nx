import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { ExchangeHttpService, ExchangeRateItem } from '@journey-nx/custom-exchange-rates-api';
import { from, Observable, of, switchMap } from 'rxjs';

export const ExchangeRateConfigurationToken =
  new InjectionToken<ExchangeRateConfiguration>(
    'ExchangeRateServiceConfig injection token'
  );

export interface ExchangeRateConfiguration {
  headerTitle: string;
}

export const DEFAULT_EXCHANGE_RATE_CONFIG: ExchangeRateConfiguration = {
  headerTitle: 'Welcome!',
};

@Injectable()
export class ExchangeRatesJourneyService {
  readonly serviceConfig: ExchangeRateConfiguration;
  constructor(
    private readonly exchangeRateDataService: ExchangeHttpService,
    @Optional()
    @Inject(ExchangeRateConfigurationToken)
    serviceConfig: Partial<ExchangeRateConfiguration> | null
  ) {
    this.serviceConfig = { ...DEFAULT_EXCHANGE_RATE_CONFIG, ...serviceConfig };
    console.log('Service configuration:', this.serviceConfig);
  }

  getExchangeRates(
    source: string,
    target: string,
    fromValue: string = '',
    to: string = ''
  ) {
    return this.exchangeRateDataService
      .getRates({ source, target, from: fromValue, to })
      .pipe(
        switchMap(
          (response: ExchangeRateItem[]): Observable<ExchangeRateItem> => {
            return response ? from(response) : of({} as ExchangeRateItem);
          }
        )
      );
  }
}
