import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartAssistantNewAppointmentComponent } from './smart-assistant-new-appointment.component';

describe('SmartAssistantNewAppointmentComponent', () => {
  let component: SmartAssistantNewAppointmentComponent;
  let fixture: ComponentFixture<SmartAssistantNewAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartAssistantNewAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartAssistantNewAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
