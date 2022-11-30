import { TestBed } from '@angular/core/testing';

import { ServicioTemaService } from './servicio-tema.service';

describe('ServicioTemaService', () => {
  let service: ServicioTemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioTemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
