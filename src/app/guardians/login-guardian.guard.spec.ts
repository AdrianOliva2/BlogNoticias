import { TestBed } from '@angular/core/testing';

import { LoginGuardianGuard } from './login-guardian.guard';

describe('LoginGuardianGuard', () => {
  let guard: LoginGuardianGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginGuardianGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
