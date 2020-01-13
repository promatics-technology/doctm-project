import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartAssistantLoginComponent } from './smart-assistant-login.component';

describe('SmartAssistantLoginComponent', () => {
  let component: SmartAssistantLoginComponent;
  let fixture: ComponentFixture<SmartAssistantLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartAssistantLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartAssistantLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
