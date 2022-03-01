import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarManagmentComponent } from './navbar-managment.component';

describe('NavbarManagmentComponent', () => {
  let component: NavbarManagmentComponent;
  let fixture: ComponentFixture<NavbarManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
