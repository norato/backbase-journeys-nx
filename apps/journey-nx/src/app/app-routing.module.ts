import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'accounts',
  //   loadChildren: () =>
  //     import('../bundle/accounts-transactions-journey-bundle.module').then(
  //       (m) => m.AccountsTransactionsJourneyBundleModule
  //     ),
  // },
  {
    path: 'contacts',
    loadChildren: () =>
      import('@journey-nx/custom-contact-manager-journey-bundle').then(
        (m) => m.CustomContactManagerJourneyBundleModule
      ),
  },
  // {
  //   path: 'rates',
  //   loadChildren: () =>
  //     import('./exchange-rates/exchange-rates-journey-bundle.module').then(
  //       (m) => m.ExchangeRatesJourneyBundleModule
  //     ),
  // },
  {
    path: '**',
    redirectTo: 'contacts',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
