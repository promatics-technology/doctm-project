import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConsultationTreatmentComponent } from './dashboard-consultation-treatment.component';

describe('DashboardConsultationTreatmentComponent', () => {
  let component: DashboardConsultationTreatmentComponent;
  let fixture: ComponentFixture<DashboardConsultationTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardConsultationTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardConsultationTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
