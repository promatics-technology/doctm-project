import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesentryComponent } from './salesentry.component';

describe('SalesentryComponent', () => {
  let component: SalesentryComponent;
  let fixture: ComponentFixture<SalesentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
