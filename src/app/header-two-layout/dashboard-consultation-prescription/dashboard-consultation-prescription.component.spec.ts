import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConsultationPrescriptionComponent } from './dashboard-consultation-prescription.component';

describe('DashboardConsultationPrescriptionComponent', () => {
  let component: DashboardConsultationPrescriptionComponent;
  let fixture: ComponentFixture<DashboardConsultationPrescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardConsultationPrescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardConsultationPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
