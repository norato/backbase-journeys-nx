import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRatesJourneyComponent } from './exchange-rates-journey.component';

describe('ExchangeRatesJourneyComponent', () => {
  let component: ExchangeRatesJourneyComponent;
  let fixture: ComponentFixture<ExchangeRatesJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeRatesJourneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRatesJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
