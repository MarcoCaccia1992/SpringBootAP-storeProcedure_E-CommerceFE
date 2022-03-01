import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCountriesUpdateComponent } from './form-countries-update.component';

describe('FormCountriesUpdateComponent', () => {
  let component: FormCountriesUpdateComponent;
  let fixture: ComponentFixture<FormCountriesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCountriesUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCountriesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
