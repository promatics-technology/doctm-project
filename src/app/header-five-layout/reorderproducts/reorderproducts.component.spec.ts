import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReorderbookComponent } from './reorderbook.component';

describe('ReorderbookComponent', () => {
  let component: ReorderbookComponent;
  let fixture: ComponentFixture<ReorderbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReorderbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReorderbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
