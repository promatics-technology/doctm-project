import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAoiComponent } from './dashboard-aoi.component';

describe('DashboardAoiComponent', () => {
  let component: DashboardAoiComponent;
  let fixture: ComponentFixture<DashboardAoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
