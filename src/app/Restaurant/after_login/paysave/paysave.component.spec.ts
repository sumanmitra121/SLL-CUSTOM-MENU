import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysaveComponent } from './paysave.component';

describe('PaysaveComponent', () => {
  let component: PaysaveComponent;
  let fixture: ComponentFixture<PaysaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
