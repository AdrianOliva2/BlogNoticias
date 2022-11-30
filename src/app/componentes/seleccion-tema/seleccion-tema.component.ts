import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'seleccion-tema',
  templateUrl: './seleccion-tema.component.html',
  styleUrls: ['./seleccion-tema.component.css']
})
export class SeleccionTemaComponent implements OnInit {

  @Output() temaOscuroEmit: EventEmitter<boolean>;
  temaOscuro: boolean;

  constructor() {
    this.temaOscuroEmit = new EventEmitter<boolean>();
    this.temaOscuro = true;
    this.temaOscuroEmit.emit(this.temaOscuro);
  }

  ngOnInit(): void {
  }

  cambiarTema(oscuro: boolean) {
    this.temaOscuro = oscuro;
    this.temaOscuroEmit.emit(oscuro);
  }

}
