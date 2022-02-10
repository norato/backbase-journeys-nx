import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import {
  AccountsListComponent,
  AccountsManageGuardService,
  AccountsTransactionsJourneyComponent,
  AccountsTransactionsJourneyConfiguration,
  AccountsTransactionsJourneyConfigurationToken,
  AccountsTransactionsJourneyModule,
} from '@backbase/accounts-transactions-journey-ang';

import { CustomAccountsManagementModule } from './custom-accounts-management/custom-accounts-management.module';
import {
  CustomAccountsManagementComponent,
} from './custom-accounts-management/custom-accounts-management/custom-accounts-management.component';

const customRoutes: Route = {
  path: '',
  component: AccountsTransactionsJourneyComponent,
  children: [
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full',
    },
    {
      path: 'list',
      component: AccountsListComponent,
      data: { title: 'My Accounts' },
    },
    {
      path: 'manage',
      component: CustomAccountsManagementComponent,
      canActivate: [AccountsManageGuardService],
    },
  ],
};
@NgModule({
  imports: [
    AccountsTransactionsJourneyModule.forRoot({ route: customRoutes }),
    CustomAccountsManagementModule,
  ],
  providers: [
    {
      provide: AccountsTransactionsJourneyConfigurationToken,
      useValue: <Partial<AccountsTransactionsJourneyConfiguration>>{
        showCheckImages: true,
        maskIndicator: true,
        enableManageAccounts: true,
      },
    },
  ],
})
export class CustomAccountsTransactionsJourneyBundleModule {}
