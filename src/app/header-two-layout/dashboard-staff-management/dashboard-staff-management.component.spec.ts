import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStaffManagementComponent } from './dashboard-staff-management.component';

describe('DashboardStaffManagementComponent', () => {
  let component: DashboardStaffManagementComponent;
  let fixture: ComponentFixture<DashboardStaffManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardStaffManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStaffManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
