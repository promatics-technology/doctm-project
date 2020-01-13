import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProgressPrescriptionComponent } from './dashboard-progress-prescription.component';

describe('DashboardProgressPrescriptionComponent', () => {
  let component: DashboardProgressPrescriptionComponent;
  let fixture: ComponentFixture<DashboardProgressPrescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardProgressPrescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProgressPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
