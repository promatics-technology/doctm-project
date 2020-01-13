import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesbookComponent } from './salesbook.component';

describe('SalesbookComponent', () => {
  let component: SalesbookComponent;
  let fixture: ComponentFixture<SalesbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
