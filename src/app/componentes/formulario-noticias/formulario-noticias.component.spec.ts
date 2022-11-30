import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNoticiasComponent } from './formulario-noticias.component';

describe('FormularioNoticiasComponent', () => {
  let component: FormularioNoticiasComponent;
  let fixture: ComponentFixture<FormularioNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioNoticiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
