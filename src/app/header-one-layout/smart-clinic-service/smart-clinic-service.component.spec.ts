import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartClinicServiceComponent } from './smart-clinic-service.component';

describe('SmartClinicServiceComponent', () => {
  let component: SmartClinicServiceComponent;
  let fixture: ComponentFixture<SmartClinicServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartClinicServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartClinicServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
