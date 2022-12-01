import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { ServicioLoginService } from 'src/app/servicios/servicio-login.service';
import { ServicioTemaService } from 'src/app/servicios/servicio-tema.service';

@Component({
  selector: 'formulario-inicio-sesion',
  templateUrl: './formulario-inicio-sesion.component.html',
  styleUrls: ['./formulario-inicio-sesion.component.css']
})
export class FormularioInicioSesionComponent implements OnInit {

  temaOscuro: boolean

  constructor(private router: Router, private servicioTema: ServicioTemaService, private servicioLogin: ServicioLoginService) {
    this.temaOscuro = servicioTema.getTemaOscuro();
    servicioTema.temaOscuro$().subscribe(temaOscuro => this.temaOscuro = temaOscuro);
  }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    txtUsu: new FormControl('', [Validators.required, Validators.minLength(3)]),
    txtContra: new FormControl('', [Validators.required, Validators.pattern("(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")])
  });

  onLoginAttemp() {
    if (this.form.controls['txtUsu'].valid && this.form.controls['txtContra'].valid) {
      this.servicioLogin.iniciarSesion(new Usuario(this.form.controls['txtUsu'].value, this.form.controls['txtContra'].value));
      this.router.navigate(['/noticias']);
    }
  }

}
