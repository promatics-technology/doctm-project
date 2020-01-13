import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticpurchaseComponent } from './diagnosticpurchase.component';

describe('DiagnosticpurchaseComponent', () => {
  let component: DiagnosticpurchaseComponent;
  let fixture: ComponentFixture<DiagnosticpurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticpurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticpurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
