import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartAssistantNewRegisterComponent } from './smart-assistant-new-register.component';

describe('SmartAssistantNewRegisterComponent', () => {
  let component: SmartAssistantNewRegisterComponent;
  let fixture: ComponentFixture<SmartAssistantNewRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartAssistantNewRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartAssistantNewRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
