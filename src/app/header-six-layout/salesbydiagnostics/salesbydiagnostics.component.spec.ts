import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesbydiagnosticsComponent } from './salesbydiagnostics.component';

describe('SalesbydiagnosticsComponent', () => {
  let component: SalesbydiagnosticsComponent;
  let fixture: ComponentFixture<SalesbydiagnosticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesbydiagnosticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesbydiagnosticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
