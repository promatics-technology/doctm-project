import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicSummaryDiagnosticComponent } from './clinic-summary-diagnostic.component';

describe('ClinicSummaryDiagnosticComponent', () => {
  let component: ClinicSummaryDiagnosticComponent;
  let fixture: ComponentFixture<ClinicSummaryDiagnosticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicSummaryDiagnosticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicSummaryDiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
