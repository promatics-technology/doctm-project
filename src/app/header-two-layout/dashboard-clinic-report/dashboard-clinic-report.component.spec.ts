import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardClinicReportComponent } from './dashboard-clinic-report.component';

describe('DashboardClinicReportComponent', () => {
  let component: DashboardClinicReportComponent;
  let fixture: ComponentFixture<DashboardClinicReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardClinicReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardClinicReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
