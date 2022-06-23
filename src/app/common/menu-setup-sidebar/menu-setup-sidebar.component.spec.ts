import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSetupSidebarComponent } from './menu-setup-sidebar.component';

describe('MenuSetupSidebarComponent', () => {
  let component: MenuSetupSidebarComponent;
  let fixture: ComponentFixture<MenuSetupSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSetupSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSetupSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
