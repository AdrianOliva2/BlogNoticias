import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDetallesComponent } from './pagina-detalles.component';

describe('PaginaDetallesComponent', () => {
  let component: PaginaDetallesComponent;
  let fixture: ComponentFixture<PaginaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
