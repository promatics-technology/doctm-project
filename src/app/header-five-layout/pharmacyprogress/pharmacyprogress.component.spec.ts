import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyprogressComponent } from './pharmacyprogress.component';

describe('PharmacyprogressComponent', () => {
  let component: PharmacyprogressComponent;
  let fixture: ComponentFixture<PharmacyprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacyprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
