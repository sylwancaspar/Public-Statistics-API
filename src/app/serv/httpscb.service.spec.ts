import { TestBed } from '@angular/core/testing';

import { HttpscbService } from './httpscb.service';

describe('HttpscbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpscbService = TestBed.get(HttpscbService);
    expect(service).toBeTruthy();
  });
});
