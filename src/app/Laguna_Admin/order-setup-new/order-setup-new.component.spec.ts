import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSetupNewComponent } from './order-setup-new.component';

describe('OrderSetupNewComponent', () => {
  let component: OrderSetupNewComponent;
  let fixture: ComponentFixture<OrderSetupNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSetupNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSetupNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
