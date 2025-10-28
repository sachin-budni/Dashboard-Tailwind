import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregnancyState } from './pregnancy-state';

describe('PregnancyState', () => {
  let component: PregnancyState;
  let fixture: ComponentFixture<PregnancyState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PregnancyState]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PregnancyState);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
