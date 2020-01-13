import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqDoctorComponent } from './faq-doctor.component';

describe('FaqDoctorComponent', () => {
  let component: FaqDoctorComponent;
  let fixture: ComponentFixture<FaqDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
