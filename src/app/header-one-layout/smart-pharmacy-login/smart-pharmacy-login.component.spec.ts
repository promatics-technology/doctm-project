import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPharmacyLoginComponent } from './smart-pharmacy-login.component';

describe('SmartPharmacyLoginComponent', () => {
  let component: SmartPharmacyLoginComponent;
  let fixture: ComponentFixture<SmartPharmacyLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartPharmacyLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartPharmacyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
