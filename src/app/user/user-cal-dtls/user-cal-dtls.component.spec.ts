import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCalDtlsComponent } from './user-cal-dtls.component';

describe('UserCalDtlsComponent', () => {
  let component: UserCalDtlsComponent;
  let fixture: ComponentFixture<UserCalDtlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCalDtlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCalDtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
