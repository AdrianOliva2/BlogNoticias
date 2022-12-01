import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {

  private usuarios: Usuario[];

  private usuario?: Usuario;
  private _usuario$: BehaviorSubject<Usuario | undefined>

  constructor() { 
    this.usuarios = [new Usuario("Adrian", "1234Abcd"), new Usuario("Admin", "1234Admin")]; 
    this.usuario = undefined;
    this._usuario$ = new BehaviorSubject<Usuario | undefined>(this.usuario);
  }

  public usuario$(): Observable<Usuario | undefined> {
    return this._usuario$.asObservable();
  }

  public getUsuario(): Usuario | undefined {
    return this.usuario;
  }

  public iniciarSesion(usuario: Usuario): boolean {
    let inicia: boolean = false;
    this.usuarios.forEach(usuarioAct => {
      if (usuarioAct.getNombre() == usuario.getNombre() && usuarioAct.getContrasenna() == usuario.getContrasenna()) {
        this.usuario = usuarioAct;
        localStorage.setItem('sesionIniciada', 'true');
        inicia = true;
      } else {
        if (!inicia) {
          this.usuario = undefined;
          localStorage.removeItem('sesionIniciada');
          inicia = false;
        }
      }
    });
    this._usuario$.next(this.usuario);
    return inicia;
  }

  public cerrarSesion(): void {
    this.usuario = undefined;
    localStorage.removeItem('sesionIniciada');
    this._usuario$.next(this.usuario);
  }

}
