import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductsInsertComponent } from './form-products-insert.component';

describe('FormProductsInsertComponent', () => {
  let component: FormProductsInsertComponent;
  let fixture: ComponentFixture<FormProductsInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProductsInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProductsInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
