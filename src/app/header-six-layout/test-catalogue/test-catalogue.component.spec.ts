import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCatalogueComponent } from './test-catalogue.component';

describe('TestCatalogueComponent', () => {
  let component: TestCatalogueComponent;
  let fixture: ComponentFixture<TestCatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
