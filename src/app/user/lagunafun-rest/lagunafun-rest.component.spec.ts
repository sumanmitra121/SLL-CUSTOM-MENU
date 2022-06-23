import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LagunafunRestComponent } from './lagunafun-rest.component';

describe('LagunafunRestComponent', () => {
  let component: LagunafunRestComponent;
  let fixture: ComponentFixture<LagunafunRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LagunafunRestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LagunafunRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
