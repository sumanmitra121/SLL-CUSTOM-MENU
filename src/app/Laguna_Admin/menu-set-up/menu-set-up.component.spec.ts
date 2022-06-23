import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSetUpComponent } from './menu-set-up.component';

describe('MenuSetUpComponent', () => {
  let component: MenuSetUpComponent;
  let fixture: ComponentFixture<MenuSetUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSetUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSetUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
