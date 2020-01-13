import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFiveLayoutComponent } from './header-five-layout.component';

describe('HeaderFiveLayoutComponent', () => {
  let component: HeaderFiveLayoutComponent;
  let fixture: ComponentFixture<HeaderFiveLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFiveLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFiveLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
