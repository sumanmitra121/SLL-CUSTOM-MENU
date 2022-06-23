import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMenuDatatableComponent } from './custom-menu-datatable.component';

describe('CustomMenuDatatableComponent', () => {
  let component: CustomMenuDatatableComponent;
  let fixture: ComponentFixture<CustomMenuDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomMenuDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMenuDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
