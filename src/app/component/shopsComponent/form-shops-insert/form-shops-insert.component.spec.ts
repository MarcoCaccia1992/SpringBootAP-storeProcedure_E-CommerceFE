import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormShopsInsertComponent } from './form-shops-insert.component';

describe('FormShopsInsertComponent', () => {
  let component: FormShopsInsertComponent;
  let fixture: ComponentFixture<FormShopsInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormShopsInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormShopsInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
