import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPant2Component } from './main-pant2.component';

describe('MainPant2Component', () => {
  let component: MainPant2Component;
  let fixture: ComponentFixture<MainPant2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPant2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPant2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
