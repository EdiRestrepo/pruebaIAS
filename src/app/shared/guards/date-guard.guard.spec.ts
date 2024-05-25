import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { dateGuardGuard } from './date-guard.guard';

describe('dateGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => dateGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
