import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudataComponent } from './menudata.component';

describe('MenudataComponent', () => {
  let component: MenudataComponent;
  let fixture: ComponentFixture<MenudataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenudataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenudataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
