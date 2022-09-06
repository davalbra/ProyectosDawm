import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPant4Component } from './main-pant4.component';

describe('MainPant4Component', () => {
  let component: MainPant4Component;
  let fixture: ComponentFixture<MainPant4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPant4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPant4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
