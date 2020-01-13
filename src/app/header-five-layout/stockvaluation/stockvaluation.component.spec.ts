import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockvaluationComponent } from './stockvaluation.component';

describe('StockvaluationComponent', () => {
  let component: StockvaluationComponent;
  let fixture: ComponentFixture<StockvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
