import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './componentes/error404/error404.component';
import { FormularioInicioSesionComponent } from './componentes/formulario-inicio-sesion/formulario-inicio-sesion.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { PaginaDetallesComponent } from './componentes/pagina-detalles/pagina-detalles.component';
import { LoginGuardianGuard } from './guardians/login-guardian.guard';
import { LoginIndexGuardianGuard } from './guardians/login-index-guardian.guard';

const routes: Routes = [
  {path: '', component: FormularioInicioSesionComponent, canActivate: [LoginIndexGuardianGuard]},
  {path: 'noticias', component: NoticiasComponent, canActivate: [LoginGuardianGuard]},
  {path: 'detalles/:id', component: PaginaDetallesComponent, canActivate: [LoginGuardianGuard]},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
