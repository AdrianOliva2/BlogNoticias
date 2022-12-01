import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Navigation, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Entrada } from 'src/app/clases/entrada';
import { ServicioEntradasService } from 'src/app/servicios/servicio-entradas.service';
import { ServicioTemaService } from 'src/app/servicios/servicio-tema.service';

@Component({
  selector: 'app-pagina-detalles',
  templateUrl: './pagina-detalles.component.html',
  styleUrls: ['./pagina-detalles.component.css']
})
export class PaginaDetallesComponent implements OnInit {

  temaOscuro: boolean
  entrada?: Entrada

  constructor(private servicioTema: ServicioTemaService, private servicioEntradas: ServicioEntradasService, private router: ActivatedRoute) {
    this.temaOscuro = servicioTema.getTemaOscuro();
    this.servicioTema.temaOscuro$().subscribe(temaOscuro => this.temaOscuro = temaOscuro);
    this.router.params.subscribe(id => this.cargarEntrada(parseInt(id['id'])))
  }

  ngOnInit(): void {
  }

  cargarEntrada(id: number | null) {
    if (id != null) {
      this.entrada = this.servicioEntradas.getEntrada(id);
    } else {
      this.entrada = undefined;
    }
  }

}
