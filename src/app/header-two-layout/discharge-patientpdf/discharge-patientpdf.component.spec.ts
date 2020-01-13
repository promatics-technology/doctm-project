import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargePatientpdfComponent } from './discharge-patientpdf.component';

describe('DischargePatientpdfComponent', () => {
  let component: DischargePatientpdfComponent;
  let fixture: ComponentFixture<DischargePatientpdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DischargePatientpdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DischargePatientpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
