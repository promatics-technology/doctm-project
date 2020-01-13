import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartClinicLoginComponent } from './smart-clinic-login.component';

describe('SmartClinicLoginComponent', () => {
  let component: SmartClinicLoginComponent;
  let fixture: ComponentFixture<SmartClinicLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartClinicLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartClinicLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
