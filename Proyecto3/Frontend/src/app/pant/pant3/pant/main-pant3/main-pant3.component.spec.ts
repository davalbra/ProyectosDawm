import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPant3Component } from './main-pant3.component';

describe('MainPant3Component', () => {
  let component: MainPant3Component;
  let fixture: ComponentFixture<MainPant3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPant3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPant3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
