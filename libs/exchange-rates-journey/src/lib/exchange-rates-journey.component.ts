import { Component, OnInit } from '@angular/core';
import { ExchangeRateItem } from '@journey-nx/custom-exchange-rates-api';
import { Observable, of, take, toArray } from 'rxjs';

import { ExchangeRatesJourneyService } from './exchange-rates-journey.service';

@Component({
  selector: 'lib-exchange-rates-journey',
  template: `
    <h3>
      {{ headerTitle }}: {{ sourceCurrencyLabel }} > {{ targetCurrencyLabel }}
    </h3>

    <div
      class="table-responsive"
      *ngIf="exchangeRates$ | async as exchangeRates"
    >
      <table class="table table-hover" [bbTable]="exchangeRates">
        <thead>
          <tr class="align-middle">
            <th class="align-middle" scope="col">
              <span class="th-content"> Date </span>
            </th>
            <th class="align-middle" scope="col">
              <span class="th-content"> Exchange Rate </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let exchangeRate of exchangeRates">
            <td>
              {{ exchangeRate?.time | date }}
            </td>
            <td>
              {{ exchangeRate?.rate | number }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [],
})
export class ExchangeRatesJourneyComponent implements OnInit {
  sourceCurrencyLabel = 'EUR'; // ADD ALL OF THESE LINES
  targetCurrencyLabel = 'USD';
  todayDate: Date = new Date();
  exchangeRates$: Observable<ExchangeRateItem[]> = of([] as ExchangeRateItem[]);
  exchangeRatesDays = 10;
  headerTitle: string =
    this.exchangeRatesJourneyService.serviceConfig.headerTitle;

  constructor(
    private exchangeRatesJourneyService: ExchangeRatesJourneyService
  ) {}

  ngOnInit(): void {
    this.exchangeRates$ = this.exchangeRatesJourneyService
      .getExchangeRates(
        this.sourceCurrencyLabel,
        this.targetCurrencyLabel,
        this.getDateBySubstractedDays(this.todayDate, this.exchangeRatesDays),
        this.getDateBySubstractedDays(this.todayDate, 1)
      )
      .pipe(take(20), toArray());
  }

  getDateBySubstractedDays(
    referenceDate: Date,
    substractedDays: number
  ): string {
    const newDate = new Date();
    newDate.setDate(referenceDate.getDate() - substractedDays);
    return newDate.toISOString().substr(0, 10);
  }
}
