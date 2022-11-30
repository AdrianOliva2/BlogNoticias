import { TestBed } from '@angular/core/testing';

import { ServicioEntradasService } from './servicio-entradas.service';

describe('ServicioEntradasService', () => {
  let service: ServicioEntradasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioEntradasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
