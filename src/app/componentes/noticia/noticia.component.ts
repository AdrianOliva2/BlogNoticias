import { Component, Input, OnInit } from '@angular/core';
import { Entrada } from 'src/app/clases/entrada';
import { ServicioEntradasService } from 'src/app/servicios/servicio-entradas.service';

@Component({
  selector: 'noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  @Input() noticia!: Entrada

  constructor(private servicioEntradas: ServicioEntradasService) { }

  ngOnInit(): void {
  }

  eliminarNoticia() {
    if (this.noticia != undefined) this.servicioEntradas.eliminarEntrada(this.noticia.getId());
  }

}
