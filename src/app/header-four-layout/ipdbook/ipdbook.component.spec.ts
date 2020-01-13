import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdbookComponent } from './ipdbook.component';

describe('IpdbookComponent', () => {
  let component: IpdbookComponent;
  let fixture: ComponentFixture<IpdbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpdbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpdbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
