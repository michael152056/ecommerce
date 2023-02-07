import { TestBed } from '@angular/core/testing';

import { TimeGuardGuard } from './time-guard.guard';

describe('TimeGuardGuard', () => {
  let guard: TimeGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TimeGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
