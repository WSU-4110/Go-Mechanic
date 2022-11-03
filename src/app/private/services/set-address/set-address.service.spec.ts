import { TestBed } from '@angular/core/testing';

import { SetAddressService } from './set-address.service';

describe('SetAddressService', () => {
  let service: SetAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
