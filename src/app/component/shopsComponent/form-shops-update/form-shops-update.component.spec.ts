import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormShopsUpdateComponent } from './form-shops-update.component';

describe('FormShopsUpdateComponent', () => {
  let component: FormShopsUpdateComponent;
  let fixture: ComponentFixture<FormShopsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormShopsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormShopsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
