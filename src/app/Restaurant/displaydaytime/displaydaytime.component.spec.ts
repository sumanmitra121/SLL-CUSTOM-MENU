import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydaytimeComponent } from './displaydaytime.component';

describe('DisplaydaytimeComponent', () => {
  let component: DisplaydaytimeComponent;
  let fixture: ComponentFixture<DisplaydaytimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaydaytimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaydaytimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
