import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateClinicComponent } from './rate-clinic.component';

describe('RateClinicComponent', () => {
  let component: RateClinicComponent;
  let fixture: ComponentFixture<RateClinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateClinicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
