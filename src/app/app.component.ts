import { Component } from '@angular/core';
import { ServicioTemaService } from './servicios/servicio-tema.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  temaOscuro: boolean

  constructor(private servicioTema: ServicioTemaService) {
    this.temaOscuro = servicioTema.getTemaOscuro();
    servicioTema.temaOscuro$().subscribe(temaOscuro => this.temaOscuro = temaOscuro);
  }

}
