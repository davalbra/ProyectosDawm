import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPant4Component } from './body-pant4.component';

describe('BodyPant4Component', () => {
  let component: BodyPant4Component;
  let fixture: ComponentFixture<BodyPant4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyPant4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyPant4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
