import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConsultationTimeComponent } from './dashboard-consultation-time.component';

describe('DashboardConsultationTimeComponent', () => {
  let component: DashboardConsultationTimeComponent;
  let fixture: ComponentFixture<DashboardConsultationTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardConsultationTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardConsultationTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
