import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromCountriesDeleteComponent } from './from-countries-delete.component';

describe('FromCountriesDeleteComponent', () => {
  let component: FromCountriesDeleteComponent;
  let fixture: ComponentFixture<FromCountriesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromCountriesDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromCountriesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
