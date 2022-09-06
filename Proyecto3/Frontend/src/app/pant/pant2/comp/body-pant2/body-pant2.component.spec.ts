import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPant2Component } from './body-pant2.component';

describe('BodyPant2Component', () => {
  let component: BodyPant2Component;
  let fixture: ComponentFixture<BodyPant2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyPant2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyPant2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
