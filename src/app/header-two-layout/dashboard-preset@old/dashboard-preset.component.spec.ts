import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPresetComponent } from './dashboard-preset.component';

describe('DashboardPresetComponent', () => {
  let component: DashboardPresetComponent;
  let fixture: ComponentFixture<DashboardPresetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPresetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
