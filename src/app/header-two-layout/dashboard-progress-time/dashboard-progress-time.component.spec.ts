import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProgressTimeComponent } from './dashboard-progress-time.component';

describe('DashboardProgressTimeComponent', () => {
  let component: DashboardProgressTimeComponent;
  let fixture: ComponentFixture<DashboardProgressTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardProgressTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProgressTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
