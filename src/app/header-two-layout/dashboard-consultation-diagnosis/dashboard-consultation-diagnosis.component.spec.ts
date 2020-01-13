import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConsultationDiagnosisComponent } from './dashboard-consultation-diagnosis.component';

describe('DashboardConsultationDiagnosisComponent', () => {
  let component: DashboardConsultationDiagnosisComponent;
  let fixture: ComponentFixture<DashboardConsultationDiagnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardConsultationDiagnosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardConsultationDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
