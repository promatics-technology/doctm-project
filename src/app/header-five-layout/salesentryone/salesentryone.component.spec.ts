import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesentryoneComponent } from './salesentryone.component';

describe('SalesentryoneComponent', () => {
  let component: SalesentryoneComponent;
  let fixture: ComponentFixture<SalesentryoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesentryoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesentryoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
