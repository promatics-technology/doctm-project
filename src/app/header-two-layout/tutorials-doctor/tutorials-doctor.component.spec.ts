import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsDoctorComponent } from './tutorials-doctor.component';

describe('TutorialsDoctorComponent', () => {
  let component: TutorialsDoctorComponent;
  let fixture: ComponentFixture<TutorialsDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialsDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
