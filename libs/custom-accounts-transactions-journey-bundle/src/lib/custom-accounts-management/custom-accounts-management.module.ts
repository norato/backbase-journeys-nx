import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductSummaryManageAccountsWidgetModule } from '@backbase/retail-ang';

import { CustomAccountsManagementComponent } from './custom-accounts-management/custom-accounts-management.component';

@NgModule({
  declarations: [CustomAccountsManagementComponent],
  imports: [CommonModule, ProductSummaryManageAccountsWidgetModule],
})
export class CustomAccountsManagementModule {}
