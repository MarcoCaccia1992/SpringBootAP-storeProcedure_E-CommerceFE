import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductsDeleteComponent } from './form-products-delete.component';

describe('FormProductsDeleteComponent', () => {
  let component: FormProductsDeleteComponent;
  let fixture: ComponentFixture<FormProductsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProductsDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProductsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
