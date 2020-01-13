import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticsprogressComponent } from './diagnosticsprogress.component';

describe('DiagnosticsprogressComponent', () => {
  let component: DiagnosticsprogressComponent;
  let fixture: ComponentFixture<DiagnosticsprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticsprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticsprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
