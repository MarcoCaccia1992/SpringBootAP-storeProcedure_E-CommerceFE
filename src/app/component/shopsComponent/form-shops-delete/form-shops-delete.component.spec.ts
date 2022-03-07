import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormShopsDeleteComponent } from './form-shops-delete.component';

describe('FormShopsDeleteComponent', () => {
  let component: FormShopsDeleteComponent;
  let fixture: ComponentFixture<FormShopsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormShopsDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormShopsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
