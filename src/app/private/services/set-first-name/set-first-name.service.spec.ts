import { TestBed } from '@angular/core/testing';

import { SetFirstNameService } from './set-first-name.service';

describe('SetFirstNameService', () => {
  let service: SetFirstNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetFirstNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
