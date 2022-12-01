import { TestBed } from '@angular/core/testing';

import { ServicioLoginService } from './servicio-login.service';

describe('ServicioLoginService', () => {
  let service: ServicioLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
