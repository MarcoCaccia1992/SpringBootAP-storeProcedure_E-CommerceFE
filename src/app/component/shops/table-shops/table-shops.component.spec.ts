import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShopsComponent } from './table-shops.component';

describe('TableShopsComponent', () => {
  let component: TableShopsComponent;
  let fixture: ComponentFixture<TableShopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableShopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
