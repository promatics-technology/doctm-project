import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacydetailComponent } from './pharmacydetail.component';

describe('PharmacydetailComponent', () => {
  let component: PharmacydetailComponent;
  let fixture: ComponentFixture<PharmacydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
