import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesbookdComponent } from './salesbookd.component';

describe('SalesbookdComponent', () => {
  let component: SalesbookdComponent;
  let fixture: ComponentFixture<SalesbookdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesbookdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesbookdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
