import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestPromoComponent } from './rest-promo.component';

describe('RestPromoComponent', () => {
  let component: RestPromoComponent;
  let fixture: ComponentFixture<RestPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestPromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
