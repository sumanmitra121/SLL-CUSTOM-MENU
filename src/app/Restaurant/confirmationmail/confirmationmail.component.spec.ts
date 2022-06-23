import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationmailComponent } from './confirmationmail.component';

describe('ConfirmationmailComponent', () => {
  let component: ConfirmationmailComponent;
  let fixture: ComponentFixture<ConfirmationmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
