import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterloginsidebarComponent } from './afterloginsidebar.component';

describe('AfterloginsidebarComponent', () => {
  let component: AfterloginsidebarComponent;
  let fixture: ComponentFixture<AfterloginsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterloginsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterloginsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
