import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdHolidayComponent } from './opd-holiday.component';

describe('OpdHolidayComponent', () => {
  let component: OpdHolidayComponent;
  let fixture: ComponentFixture<OpdHolidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdHolidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
