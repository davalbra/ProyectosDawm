import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPant1Component } from './body-pant1.component';

describe('BodyPant1Component', () => {
  let component: BodyPant1Component;
  let fixture: ComponentFixture<BodyPant1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyPant1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyPant1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
