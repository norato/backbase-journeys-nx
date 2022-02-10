import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bb-custom-accounts-manage-list',
  template: `
    <h3>This is the customized Manage Accounts view.</h3>
    <p>
      It is using the existing Product Summary Widget, but this could be
      replaced by a custom solution for your project.
    </p>
    <bb-product-summary-manage-accounts-widget></bb-product-summary-manage-accounts-widget>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomAccountsManagementComponent {
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  onBatchOrderNavigation(orderId: string) {
    this.router.navigate(['..', 'details', { batchOrderId: orderId }], {
      relativeTo: this.route,
    });
  }
}
