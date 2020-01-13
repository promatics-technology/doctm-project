import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPrescriptionPadOffComponent } from './dashboard-prescription-pad-off.component';

describe('DashboardPrescriptionPadOffComponent', () => {
  let component: DashboardPrescriptionPadOffComponent;
  let fixture: ComponentFixture<DashboardPrescriptionPadOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPrescriptionPadOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPrescriptionPadOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
