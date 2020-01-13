import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConsultationInvestigationComponent } from './dashboard-consultation-investigation.component';

describe('DashboardConsultationInvestigationComponent', () => {
  let component: DashboardConsultationInvestigationComponent;
  let fixture: ComponentFixture<DashboardConsultationInvestigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardConsultationInvestigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardConsultationInvestigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
