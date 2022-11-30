import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Entrada } from '../clases/entrada';

@Injectable({
  providedIn: 'root'
})
export class ServicioEntradasService {

  private entradas: Entrada[];
  private _entradas$: BehaviorSubject<Entrada[]>;

  constructor() {
    let entrada: Entrada = new Entrada("Título Entrada 1", "Contenido Entrada 1", new Date());
    entrada.setId(1);
    this.entradas = [entrada];
    this._entradas$ = new BehaviorSubject<Entrada[]>(this.entradas);
  }
  
  public entradas$(): Observable<Entrada[]> {
    return this._entradas$.asObservable();
  }

  public getEntradas(): Entrada[] {
    return [...this.entradas];
  }

  public getEntrada(id: number): Entrada {
    return this.entradas.filter(entrada => entrada.getId() == id)[0];
  }

  public eliminarEntrada(id?: number): void {
    this.entradas = this.entradas.filter(entrada => entrada.getId() != id);
    this._entradas$.next(this.entradas);
  }

  public anadirEntrada(entrada: Entrada) {
    if (this.entradas.length > 0) {
      entrada.setId(this.entradas[(this.entradas.length - 1)].getId());
    } else {
      entrada.setId(0);
    }
    this.entradas.unshift(entrada);
    this._entradas$.next(this.entradas);
  }

}
