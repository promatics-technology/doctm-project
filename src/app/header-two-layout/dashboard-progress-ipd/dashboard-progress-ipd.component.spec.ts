import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProgressIpdComponent } from './dashboard-progress-ipd.component';

describe('DashboardProgressIpdComponent', () => {
  let component: DashboardProgressIpdComponent;
  let fixture: ComponentFixture<DashboardProgressIpdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardProgressIpdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProgressIpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
