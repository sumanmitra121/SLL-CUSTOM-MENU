import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderPageSetUpComponent } from './admin-order-page-set-up.component';

describe('AdminOrderPageSetUpComponent', () => {
  let component: AdminOrderPageSetUpComponent;
  let fixture: ComponentFixture<AdminOrderPageSetUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOrderPageSetUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrderPageSetUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
