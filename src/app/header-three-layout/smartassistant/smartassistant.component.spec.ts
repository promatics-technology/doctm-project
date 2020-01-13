import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartassistantComponent } from './smartassistant.component';

describe('SmartassistantComponent', () => {
  let component: SmartassistantComponent;
  let fixture: ComponentFixture<SmartassistantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartassistantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartassistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
