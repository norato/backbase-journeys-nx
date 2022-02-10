import { NgModule } from '@angular/core';
import {
  ExchangeRateConfiguration,
  ExchangeRateConfigurationToken,
  ExchangeRatesJourneyModule,
} from '@journey-nx/exchange-rates-journey';

@NgModule({
  imports: [ExchangeRatesJourneyModule.forRoot()],
  providers: [
    {
      provide: ExchangeRateConfigurationToken,
      useValue: <Partial<ExchangeRateConfiguration>>{
        headerTitle: 'Exchange Rates History',
      },
    },
  ],
})
export class ExchangeRatesJourneyBundleModule {}
