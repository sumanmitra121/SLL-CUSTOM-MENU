import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LagunaFunComponent } from './laguna-fun.component';

describe('LagunaFunComponent', () => {
  let component: LagunaFunComponent;
  let fixture: ComponentFixture<LagunaFunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LagunaFunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LagunaFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
