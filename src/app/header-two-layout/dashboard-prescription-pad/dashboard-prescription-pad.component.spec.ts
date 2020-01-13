import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPrescriptionPadComponent } from './dashboard-prescription-pad.component';

describe('DashboardPrescriptionPadComponent', () => {
  let component: DashboardPrescriptionPadComponent;
  let fixture: ComponentFixture<DashboardPrescriptionPadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPrescriptionPadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPrescriptionPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
