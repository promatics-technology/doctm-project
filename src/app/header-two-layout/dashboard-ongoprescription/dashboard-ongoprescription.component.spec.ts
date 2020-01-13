import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOngoprescriptionComponent } from './dashboard-ongoprescription.component';

describe('DashboardOngoprescriptionComponent', () => {
  let component: DashboardOngoprescriptionComponent;
  let fixture: ComponentFixture<DashboardOngoprescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOngoprescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOngoprescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
