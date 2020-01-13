import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConsultationPatientComponent } from './dashboard-consultation-patient.component';

describe('DashboardConsultationPatientComponent', () => {
  let component: DashboardConsultationPatientComponent;
  let fixture: ComponentFixture<DashboardConsultationPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardConsultationPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardConsultationPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
