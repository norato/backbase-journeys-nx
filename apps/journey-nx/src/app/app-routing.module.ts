import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'accounts',
    loadChildren: () =>
      import('@journey-nx/custom-accounts-transactions-journey-bundle').then(
        (m) => m.CustomAccountsTransactionsJourneyBundleModule
      ),
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('@journey-nx/custom-contact-manager-journey-bundle').then(
        (m) => m.CustomContactManagerJourneyBundleModule
      ),
  },
  {
    path: 'rates',
    loadChildren: () =>
      import('./custom-journeys/exchange-rates-journey-bundle.module').then(
        (m) => m.ExchangeRatesJourneyBundleModule
      ),
  },
  {
    path: '**',
    redirectTo: 'accounts',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
