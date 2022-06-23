import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLinkComponent } from './no-link.component';

describe('NoLinkComponent', () => {
  let component: NoLinkComponent;
  let fixture: ComponentFixture<NoLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
