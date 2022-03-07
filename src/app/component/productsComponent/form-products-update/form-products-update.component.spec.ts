import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductsUpdateComponent } from './form-products-update.component';

describe('FormProductsUpdateComponent', () => {
  let component: FormProductsUpdateComponent;
  let fixture: ComponentFixture<FormProductsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProductsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProductsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
