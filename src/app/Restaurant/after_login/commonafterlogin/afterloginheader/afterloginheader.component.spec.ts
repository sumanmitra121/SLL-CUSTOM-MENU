import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterloginheaderComponent } from './afterloginheader.component';

describe('AfterloginheaderComponent', () => {
  let component: AfterloginheaderComponent;
  let fixture: ComponentFixture<AfterloginheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterloginheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterloginheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
