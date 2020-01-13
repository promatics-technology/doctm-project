import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPrescriptionComponent } from './dashboard-prescription.component';

describe('DashboardPrescriptionComponent', () => {
  let component: DashboardPrescriptionComponent;
  let fixture: ComponentFixture<DashboardPrescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPrescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
