import { TestBed } from '@angular/core/testing';

import { ExpresService } from './expres.service';

describe('ExpresService', () => {
  let service: ExpresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
