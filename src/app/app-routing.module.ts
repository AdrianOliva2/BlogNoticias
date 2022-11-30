import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioInicioSesionComponent } from './componentes/formulario-inicio-sesion/formulario-inicio-sesion.component';
import { NoticiasPadreComponent } from './componentes/noticias-padre/noticias-padre.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';

const routes: Routes = [
  {path: '', component: FormularioInicioSesionComponent},
  {path: 'noticias', component: NoticiasPadreComponent},
  {path: '**', component: FormularioInicioSesionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
