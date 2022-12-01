import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Entrada } from 'src/app/clases/entrada';
import { ServicioEntradasService } from 'src/app/servicios/servicio-entradas.service';
import { ServicioTemaService } from 'src/app/servicios/servicio-tema.service';

@Component({
  selector: 'formulario-noticias',
  templateUrl: './formulario-noticias.component.html',
  styleUrls: ['./formulario-noticias.component.css']
})
export class FormularioNoticiasComponent implements OnInit {

  temaOscuro: boolean;

  constructor(private servicioTema: ServicioTemaService, private servicioEntradas: ServicioEntradasService) {
    this.temaOscuro = this.servicioTema.getTemaOscuro();
    this.servicioTema.temaOscuro$().subscribe(temaOscuro => this.temaOscuro = temaOscuro);
  }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    txtTitulo: new FormControl('', [Validators.required]),
    txtNoticia: new FormControl('', [Validators.required])
  });

  anadirNoticia() {
    if (this.form.controls['txtTitulo'].valid && this.form.controls['txtTitulo'].valid) {
      this.servicioEntradas.anadirEntrada(new Entrada(this.form.controls['txtTitulo'].value, this.form.controls['txtNoticia'].value, new Date()))
      this.form.controls['txtTitulo'].setValue("");
      this.form.controls['txtNoticia'].setValue("");
      this.form.controls['txtTitulo'].setErrors(null);
      this.form.controls['txtNoticia'].setErrors(null);
    }
  }

}
