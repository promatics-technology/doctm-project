import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartIpdServiceComponent } from './smart-ipd-service.component';

describe('SmartIpdServiceComponent', () => {
  let component: SmartIpdServiceComponent;
  let fixture: ComponentFixture<SmartIpdServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartIpdServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartIpdServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
