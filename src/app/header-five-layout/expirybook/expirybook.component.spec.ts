import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpirybookComponent } from './expirybook.component';

describe('ExpirybookComponent', () => {
  let component: ExpirybookComponent;
  let fixture: ComponentFixture<ExpirybookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpirybookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpirybookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
