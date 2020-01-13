import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardReferralComponent } from './dashboard-referral.component';

describe('DashboardReferralComponent', () => {
  let component: DashboardReferralComponent;
  let fixture: ComponentFixture<DashboardReferralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardReferralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardReferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
