import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionimagesComponent } from './sectionimages.component';

describe('SectionimagesComponent', () => {
  let component: SectionimagesComponent;
  let fixture: ComponentFixture<SectionimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionimagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
