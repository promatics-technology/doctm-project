import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDiagnosticsDetailComponent } from './dashboard-diagnostics-detail.component';

describe('DashboardDiagnosticsDetailComponent', () => {
  let component: DashboardDiagnosticsDetailComponent;
  let fixture: ComponentFixture<DashboardDiagnosticsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDiagnosticsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDiagnosticsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
