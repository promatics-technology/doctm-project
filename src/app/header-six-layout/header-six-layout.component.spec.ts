import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSixLayoutComponent } from './header-six-layout.component';

describe('HeaderSixLayoutComponent', () => {
  let component: HeaderSixLayoutComponent;
  let fixture: ComponentFixture<HeaderSixLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSixLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSixLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
