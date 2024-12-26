import { TestBed } from '@angular/core/testing';

import { GetAddtocartForUserService } from './get-addtocart-for-user.service';

describe('GetAddtocartForUserService', () => {
  let service: GetAddtocartForUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAddtocartForUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
