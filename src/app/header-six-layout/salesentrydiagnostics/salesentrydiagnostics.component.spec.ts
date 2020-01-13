import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesentrydiagnosticsComponent } from './salesentrydiagnostics.component';

describe('SalesentrydiagnosticsComponent', () => {
  let component: SalesentrydiagnosticsComponent;
  let fixture: ComponentFixture<SalesentrydiagnosticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesentrydiagnosticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesentrydiagnosticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
