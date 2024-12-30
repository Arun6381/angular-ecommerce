import { TestBed } from '@angular/core/testing';

import { GetvideoService } from './getvideo.service';

describe('GetvideoService', () => {
  let service: GetvideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetvideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
