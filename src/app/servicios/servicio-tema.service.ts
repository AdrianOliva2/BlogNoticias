import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioTemaService {

  private temaOscuro: boolean
  private _temaOscuro$: BehaviorSubject<boolean>

  constructor() {
    this.temaOscuro = true;
    this._temaOscuro$ = new BehaviorSubject<boolean>(this.temaOscuro);
  }

  public temaOscuro$(): Observable<boolean> {
    return this._temaOscuro$.asObservable();
  }

  public getTemaOscuro(): boolean {
    return this.temaOscuro;
  }

  public setTemaOscuro(temaOscuro: boolean): void {
    this.temaOscuro = temaOscuro;
    this._temaOscuro$.next(temaOscuro);
  }

}
