import { TestBed } from '@angular/core/testing';

import { GetallvideoService } from './getallvideo.service';

describe('GetallvideoService', () => {
  let service: GetallvideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetallvideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
