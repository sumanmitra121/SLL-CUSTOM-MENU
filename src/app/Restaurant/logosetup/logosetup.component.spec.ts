import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosetupComponent } from './logosetup.component';

describe('LogosetupComponent', () => {
  let component: LogosetupComponent;
  let fixture: ComponentFixture<LogosetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogosetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogosetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
