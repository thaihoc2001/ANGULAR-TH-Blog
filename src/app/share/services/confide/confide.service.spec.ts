import { TestBed } from '@angular/core/testing';

import { ConfideService } from './confide.service';

describe('ConfideService', () => {
  let service: ConfideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
