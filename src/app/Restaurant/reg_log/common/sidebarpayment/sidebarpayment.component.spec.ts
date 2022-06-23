import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarpaymentComponent } from './sidebarpayment.component';

describe('SidebarpaymentComponent', () => {
  let component: SidebarpaymentComponent;
  let fixture: ComponentFixture<SidebarpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarpaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
