import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionTemaComponent } from './seleccion-tema.component';

describe('SeleccionTemaComponent', () => {
  let component: SeleccionTemaComponent;
  let fixture: ComponentFixture<SeleccionTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionTemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
