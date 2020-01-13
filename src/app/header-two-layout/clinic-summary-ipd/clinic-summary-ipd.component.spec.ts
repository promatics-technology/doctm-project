import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicSummaryIpdComponent } from './clinic-summary-ipd.component';

describe('ClinicSummaryIpdComponent', () => {
  let component: ClinicSummaryIpdComponent;
  let fixture: ComponentFixture<ClinicSummaryIpdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicSummaryIpdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicSummaryIpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
