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
    let entrada1: Entrada = new Entrada("Título Entrada 1", "Contenido Entrada 1", new Date());
    entrada1.setId(1);
    let entrada2: Entrada = new Entrada("Título Entrada 2", "Contenido Entrada 2", new Date());
    entrada2.setId(2);
    let entrada3: Entrada = new Entrada("Título Entrada 3", "Contenido Entrada 3", new Date());
    entrada3.setId(3);
    let entrada4: Entrada = new Entrada("Título Entrada 4", "Contenido Entrada 4", new Date());
    entrada4.setId(4);
    this.entradas = [entrada4, entrada3, entrada2, entrada1];
    this._entradas$ = new BehaviorSubject<Entrada[]>(this.entradas);
  }

  public entradas$(): Observable<Entrada[]> {
    return this._entradas$.asObservable();
  }

  public getEntradas(): Entrada[] {
    return [...this.entradas];
  }

  public getEntrada(id: number): Entrada | undefined {
    return this.entradas.find(entrada => entrada.getId() == id);
  }

  public eliminarEntrada(id?: number): void {
    this.entradas = this.entradas.filter(entrada => entrada.getId() != id);
    this._entradas$.next(this.entradas);
  }

  public anadirEntrada(entrada: Entrada) {
    if (this.entradas.length > 0) {
      let id: number = (this.entradas[0].getId()! + 1);
      entrada.setId(id);
    } else {
      entrada.setId(1);
    }
    this.entradas.unshift(entrada);
    this._entradas$.next(this.entradas);
  }

}
