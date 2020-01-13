import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProgressDiagnosisComponent } from './dashboard-progress-diagnosis.component';

describe('DashboardProgressDiagnosisComponent', () => {
  let component: DashboardProgressDiagnosisComponent;
  let fixture: ComponentFixture<DashboardProgressDiagnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardProgressDiagnosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProgressDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
