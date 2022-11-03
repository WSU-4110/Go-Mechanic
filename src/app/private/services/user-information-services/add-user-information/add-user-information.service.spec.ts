import { TestBed } from '@angular/core/testing';
import { AddUserInformationService } from './add-user-information.service';

describe('AddUserInformationService', () => {
  let service: AddUserInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddUserInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
