import { TestBed } from '@angular/core/testing';

import { SetLastNameService } from './set-last-name.service';

describe('SetLastNameService', () => {
  let service: SetLastNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetLastNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
