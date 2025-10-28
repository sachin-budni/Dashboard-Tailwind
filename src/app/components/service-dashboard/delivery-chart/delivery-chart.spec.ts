import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryChart } from './delivery-chart';

describe('DeliveryChart', () => {
  let component: DeliveryChart;
  let fixture: ComponentFixture<DeliveryChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
