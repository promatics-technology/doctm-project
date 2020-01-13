import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartDiagnosticsLoginComponent } from './smart-diagnostics-login.component';

describe('SmartDiagnosticsLoginComponent', () => {
  let component: SmartDiagnosticsLoginComponent;
  let fixture: ComponentFixture<SmartDiagnosticsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartDiagnosticsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartDiagnosticsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
