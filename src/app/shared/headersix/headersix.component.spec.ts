import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersixComponent } from './headersix.component';

describe('HeadersixComponent', () => {
  let component: HeadersixComponent;
  let fixture: ComponentFixture<HeadersixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadersixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadersixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
