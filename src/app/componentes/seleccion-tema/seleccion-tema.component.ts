import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioLoginService } from 'src/app/servicios/servicio-login.service';
import { ServicioTemaService } from 'src/app/servicios/servicio-tema.service';

@Component({
  selector: 'seleccion-tema',
  templateUrl: './seleccion-tema.component.html',
  styleUrls: ['./seleccion-tema.component.css']
})
export class SeleccionTemaComponent implements OnInit {

  temaOscuro: boolean;

  constructor(private servicioTema: ServicioTemaService, private servicioLogin: ServicioLoginService, private router: Router) {
    this.temaOscuro = servicioTema.getTemaOscuro();
    servicioTema.temaOscuro$().subscribe(temaOscuro => this.temaOscuro = temaOscuro);
  }

  ngOnInit(): void {
  }

  cambiarTema(oscuro: boolean) {
    this.servicioTema.setTemaOscuro(oscuro);
  }

  cerrarSesion() {
    this.servicioLogin.cerrarSesion();
    this.router.navigate(['']);
  }

  sesionIniciada(): boolean {
    if(this.servicioLogin.getUsuario() == undefined && (localStorage.getItem('sesionIniciada') == null || localStorage.getItem('sesionIniciada') != 'true')) return false;
    return true; 
  }

}
