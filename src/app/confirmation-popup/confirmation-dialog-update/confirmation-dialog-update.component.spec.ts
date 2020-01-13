import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialogUpdateComponent } from './confirmation-dialog-update.component';

describe('ConfirmationDialogUpdateComponent', () => {
  let component: ConfirmationDialogUpdateComponent;
  let fixture: ComponentFixture<ConfirmationDialogUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationDialogUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationDialogUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
