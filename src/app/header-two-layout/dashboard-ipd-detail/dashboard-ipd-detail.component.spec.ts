import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIpdDetailComponent } from './dashboard-ipd-detail.component';

describe('DashboardIpdDetailComponent', () => {
  let component: DashboardIpdDetailComponent;
  let fixture: ComponentFixture<DashboardIpdDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardIpdDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardIpdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
