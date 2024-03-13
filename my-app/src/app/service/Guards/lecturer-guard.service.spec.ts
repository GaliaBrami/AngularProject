import { TestBed } from '@angular/core/testing';

import { LecturerGuardService } from './lecturer-guard.service';

describe('LecturerGuardService', () => {
  let service: LecturerGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LecturerGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
