import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartIpdloginComponent } from './smart-ipdlogin.component';

describe('SmartIpdloginComponent', () => {
  let component: SmartIpdloginComponent;
  let fixture: ComponentFixture<SmartIpdloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartIpdloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartIpdloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
