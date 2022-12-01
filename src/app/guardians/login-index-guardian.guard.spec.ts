import { TestBed } from '@angular/core/testing';

import { LoginIndexGuardianGuard } from './login-index-guardian.guard';

describe('LoginIndexGuardianGuard', () => {
  let guard: LoginIndexGuardianGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginIndexGuardianGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
