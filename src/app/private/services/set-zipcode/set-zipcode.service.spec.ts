import { TestBed } from '@angular/core/testing';

import { SetZipcodeService } from './set-zipcode.service';

describe('SetZipcodeService', () => {
  let service: SetZipcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetZipcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
