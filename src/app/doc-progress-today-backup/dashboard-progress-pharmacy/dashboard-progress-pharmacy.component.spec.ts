import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProgressPharmacyComponent } from './dashboard-progress-pharmacy.component';

describe('DashboardProgressPharmacyComponent', () => {
  let component: DashboardProgressPharmacyComponent;
  let fixture: ComponentFixture<DashboardProgressPharmacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardProgressPharmacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProgressPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
