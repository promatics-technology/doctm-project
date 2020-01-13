import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSmsComponent } from './dashboard-sms.component';

describe('DashboardSmsComponent', () => {
  let component: DashboardSmsComponent;
  let fixture: ComponentFixture<DashboardSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
