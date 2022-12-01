import { Component, OnInit } from '@angular/core';
import { ServicioTemaService } from 'src/app/servicios/servicio-tema.service';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {
  
  temaOscuro: boolean;

  constructor(private servicioTema: ServicioTemaService) {
    this.temaOscuro = servicioTema.getTemaOscuro();
    this.servicioTema.temaOscuro$().subscribe(temaOscuro => this.temaOscuro = temaOscuro);
  }

  ngOnInit(): void {
  }

}
