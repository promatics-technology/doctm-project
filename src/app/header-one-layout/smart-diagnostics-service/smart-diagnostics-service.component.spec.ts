import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartDiagnosticsServiceComponent } from './smart-diagnostics-service.component';

describe('SmartDiagnosticsServiceComponent', () => {
  let component: SmartDiagnosticsServiceComponent;
  let fixture: ComponentFixture<SmartDiagnosticsServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartDiagnosticsServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartDiagnosticsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
