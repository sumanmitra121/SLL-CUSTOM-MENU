import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LagunafunBarComponent } from './lagunafun-bar.component';

describe('LagunafunBarComponent', () => {
  let component: LagunafunBarComponent;
  let fixture: ComponentFixture<LagunafunBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LagunafunBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LagunafunBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
