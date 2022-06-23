import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsRestaurantlistComponent } from './events-restaurantlist.component';

describe('EventsRestaurantlistComponent', () => {
  let component: EventsRestaurantlistComponent;
  let fixture: ComponentFixture<EventsRestaurantlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsRestaurantlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsRestaurantlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
