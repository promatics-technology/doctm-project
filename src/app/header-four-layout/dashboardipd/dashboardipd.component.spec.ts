import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardipdComponent } from './dashboardipd.component';

describe('DashboardipdComponent', () => {
  let component: DashboardipdComponent;
  let fixture: ComponentFixture<DashboardipdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardipdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardipdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
