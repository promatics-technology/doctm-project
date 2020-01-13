import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicSummaryOpdComponent } from './clinic-summary-opd.component';

describe('ClinicSummaryOpdComponent', () => {
  let component: ClinicSummaryOpdComponent;
  let fixture: ComponentFixture<ClinicSummaryOpdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicSummaryOpdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicSummaryOpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
