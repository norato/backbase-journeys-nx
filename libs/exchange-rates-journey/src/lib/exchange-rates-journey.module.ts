import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { provideRoutes, Route } from '@angular/router';
import { TableModule } from '@backbase/ui-ang';

import { ExchangeRatesJourneyComponent } from './exchange-rates-journey.component';
import { ExchangeRatesJourneyService } from './exchange-rates-journey.service';

const defaultRoute: Route = {
  path: '',
  component: ExchangeRatesJourneyComponent,
  children: [
    {
      path: '',
      redirectTo: 'history',
      pathMatch: 'full',
    },
    {
      path: 'history',
      component: ExchangeRatesJourneyComponent,
    },
  ],
};

@NgModule({
  declarations: [ExchangeRatesJourneyComponent],
  imports: [CommonModule, TableModule],
  exports: [ExchangeRatesJourneyComponent],
  providers: [ExchangeRatesJourneyService],
})
export class ExchangeRatesJourneyModule {
  static forRoot(
    data: { [key: string]: unknown; route: Route } = { route: defaultRoute }
  ): ModuleWithProviders<ExchangeRatesJourneyModule> {
    return {
      ngModule: ExchangeRatesJourneyModule,
      providers: [provideRoutes([data.route])],
    };
  }
}
