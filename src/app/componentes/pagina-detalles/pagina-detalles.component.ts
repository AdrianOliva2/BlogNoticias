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
    let idText: number | null = null;
    this.router.params.subscribe(id => idText = parseInt(id['id']))
    if (idText != null) {
      this.entrada = this.servicioEntradas.getEntrada(idText);
    } else {
      this.entrada = undefined;
    }
  }

  ngOnInit(): void {
  }

}
