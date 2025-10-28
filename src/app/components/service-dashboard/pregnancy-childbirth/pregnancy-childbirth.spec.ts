import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregnancyChildbirth } from './pregnancy-childbirth';

describe('PregnancyChildbirth', () => {
  let component: PregnancyChildbirth;
  let fixture: ComponentFixture<PregnancyChildbirth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PregnancyChildbirth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PregnancyChildbirth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
