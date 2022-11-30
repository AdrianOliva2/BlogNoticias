import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioTemaService } from 'src/app/servicios/servicio-tema.service';

@Component({
  selector: 'seleccion-tema',
  templateUrl: './seleccion-tema.component.html',
  styleUrls: ['./seleccion-tema.component.css']
})
export class SeleccionTemaComponent implements OnInit {

  temaOscuro: boolean;

  constructor(private servicioTema: ServicioTemaService) {
    this.temaOscuro = servicioTema.getTemaOscuro();
    servicioTema.temaOscuro$().subscribe(temaOscuro => this.temaOscuro = temaOscuro);
  }

  ngOnInit(): void {
  }

  cambiarTema(oscuro: boolean) {
    this.servicioTema.setTemaOscuro(oscuro);
  }

}
