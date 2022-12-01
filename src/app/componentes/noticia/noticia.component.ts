import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entrada } from 'src/app/clases/entrada';
import { ServicioEntradasService } from 'src/app/servicios/servicio-entradas.service';

@Component({
  selector: 'noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  @Input() noticia!: Entrada

  constructor(private servicioEntradas: ServicioEntradasService, private router: Router) { }

  ngOnInit(): void {
  }

  eliminarNoticia() {
    if (this.noticia != undefined) this.servicioEntradas.eliminarEntrada(this.noticia.getId());
  }

  verDetalles() {
    this.router.navigate(['detalles', this.noticia.getId()]);
  }

}
