import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardpharmacyComponent } from './dashboardpharmacy.component';

describe('DashboardpharmacyComponent', () => {
  let component: DashboardpharmacyComponent;
  let fixture: ComponentFixture<DashboardpharmacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardpharmacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardpharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
