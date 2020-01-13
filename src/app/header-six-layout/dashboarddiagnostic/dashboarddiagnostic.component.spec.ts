import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarddiagnosticComponent } from './dashboarddiagnostic.component';

describe('DashboarddiagnosticComponent', () => {
  let component: DashboarddiagnosticComponent;
  let fixture: ComponentFixture<DashboarddiagnosticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboarddiagnosticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboarddiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
