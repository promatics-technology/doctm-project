import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPharmacyServiceComponent } from './smart-pharmacy-service.component';

describe('SmartPharmacyServiceComponent', () => {
  let component: SmartPharmacyServiceComponent;
  let fixture: ComponentFixture<SmartPharmacyServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartPharmacyServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartPharmacyServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
