import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSavedpresetComponent } from './dashboard-savedpreset.component';

describe('DashboardSavedpresetComponent', () => {
  let component: DashboardSavedpresetComponent;
  let fixture: ComponentFixture<DashboardSavedpresetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSavedpresetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSavedpresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
