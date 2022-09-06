import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPant3Component } from './body-pant3.component';

describe('BodyPant3Component', () => {
  let component: BodyPant3Component;
  let fixture: ComponentFixture<BodyPant3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyPant3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyPant3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
