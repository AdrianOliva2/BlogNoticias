import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/clases/entrada';
import { ServicioEntradasService } from 'src/app/servicios/servicio-entradas.service';

@Component({
  selector: 'lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent implements OnInit {

  listaNoticias: Entrada[];

  constructor(private servicioEntradas: ServicioEntradasService) {
    this.listaNoticias = servicioEntradas.getEntradas();
    this.servicioEntradas.entradas$().subscribe(entradas => this.listaNoticias = entradas);
  }

  ngOnInit(): void {
  }

}
