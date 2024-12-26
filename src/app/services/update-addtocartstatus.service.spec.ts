import { TestBed } from '@angular/core/testing';

import { UpdateAddtocartstatusService } from './update-addtocartstatus.service';

describe('UpdateAddtocartstatusService', () => {
  let service: UpdateAddtocartstatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateAddtocartstatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
