import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioInicioSesionComponent } from './formulario-inicio-sesion.component';

describe('FormularioInicioSesionComponent', () => {
  let component: FormularioInicioSesionComponent;
  let fixture: ComponentFixture<FormularioInicioSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioInicioSesionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioInicioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
