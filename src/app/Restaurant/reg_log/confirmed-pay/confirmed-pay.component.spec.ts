import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedPayComponent } from './confirmed-pay.component';

describe('ConfirmedPayComponent', () => {
  let component: ConfirmedPayComponent;
  let fixture: ComponentFixture<ConfirmedPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmedPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
