import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPharmacyDetailComponent } from './dashboard-pharmacy-detail.component';

describe('DashboardPharmacyDetailComponent', () => {
  let component: DashboardPharmacyDetailComponent;
  let fixture: ComponentFixture<DashboardPharmacyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPharmacyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPharmacyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
