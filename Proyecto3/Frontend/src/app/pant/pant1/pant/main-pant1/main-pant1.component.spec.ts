import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPant1Component } from './main-pant1.component';

describe('MainPant1Component', () => {
  let component: MainPant1Component;
  let fixture: ComponentFixture<MainPant1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPant1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPant1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
