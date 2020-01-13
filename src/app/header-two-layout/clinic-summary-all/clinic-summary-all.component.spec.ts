import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicSummaryAllComponent } from './clinic-summary-all.component';

describe('ClinicSummaryAllComponent', () => {
  let component: ClinicSummaryAllComponent;
  let fixture: ComponentFixture<ClinicSummaryAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicSummaryAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicSummaryAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
