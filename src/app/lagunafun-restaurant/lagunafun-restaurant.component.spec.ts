import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LagunafunRestaurantComponent } from './lagunafun-restaurant.component';

describe('LagunafunRestaurantComponent', () => {
  let component: LagunafunRestaurantComponent;
  let fixture: ComponentFixture<LagunafunRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LagunafunRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LagunafunRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
