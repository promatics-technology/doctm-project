import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartAssistantServiceComponent } from './smart-assistant-service.component';

describe('SmartAssistantServiceComponent', () => {
  let component: SmartAssistantServiceComponent;
  let fixture: ComponentFixture<SmartAssistantServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartAssistantServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartAssistantServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
