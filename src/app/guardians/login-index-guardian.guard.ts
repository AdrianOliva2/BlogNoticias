import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicioLoginService } from '../servicios/servicio-login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginIndexGuardianGuard implements CanActivate {
  
  constructor(private servicioLogin: ServicioLoginService, private router: Router) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.servicioLogin.getUsuario() == undefined && (localStorage.getItem('sesionIniciada') == null || localStorage.getItem('sesionIniciada') != 'true')){
      return true;
    }
    this.router.navigate(['/noticias']);
    return false; 
  }
  
}
