import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPrescriptionViewComponent } from './dashboard-prescription-view.component';

describe('DashboardPrescriptionViewComponent', () => {
  let component: DashboardPrescriptionViewComponent;
  let fixture: ComponentFixture<DashboardPrescriptionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPrescriptionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPrescriptionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
