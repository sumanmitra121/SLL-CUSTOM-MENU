import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalproductComponent } from './additionalproduct.component';

describe('AdditionalproductComponent', () => {
  let component: AdditionalproductComponent;
  let fixture: ComponentFixture<AdditionalproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
