import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicSummaryPharmacyComponent } from './clinic-summary-pharmacy.component';

describe('ClinicSummaryPharmacyComponent', () => {
  let component: ClinicSummaryPharmacyComponent;
  let fixture: ComponentFixture<ClinicSummaryPharmacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicSummaryPharmacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicSummaryPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
