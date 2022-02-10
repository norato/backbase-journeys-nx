import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAccountsManagementComponent } from './custom-accounts-management.component';

describe('CustomAccountsManagementComponent', () => {
  let component: CustomAccountsManagementComponent;
  let fixture: ComponentFixture<CustomAccountsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomAccountsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAccountsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
