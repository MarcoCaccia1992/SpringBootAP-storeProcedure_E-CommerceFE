import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCountriesInsertComponent } from './form-countries-insert.component';

describe('FormCountriesInsertComponent', () => {
  let component: FormCountriesInsertComponent;
  let fixture: ComponentFixture<FormCountriesInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCountriesInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCountriesInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
