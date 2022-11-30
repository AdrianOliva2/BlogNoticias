import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'formulario-inicio-sesion',
  templateUrl: './formulario-inicio-sesion.component.html',
  styleUrls: ['./formulario-inicio-sesion.component.css']
})
export class FormularioInicioSesionComponent implements OnInit {

  @Input() temaOscuro!: boolean

  constructor() { }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    txtUsu: new FormControl('', Validators.required),
    txtContra: new FormControl('', Validators.required)
  });

}
