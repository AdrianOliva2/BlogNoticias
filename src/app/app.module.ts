import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormularioInicioSesionComponent } from './componentes/formulario-inicio-sesion/formulario-inicio-sesion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { FormularioNoticiasComponent } from './componentes/formulario-noticias/formulario-noticias.component';
import { NoticiaComponent } from './componentes/noticia/noticia.component';
import { NoticiasPadreComponent } from './componentes/noticias-padre/noticias-padre.component';
import { ListaNoticiasComponent } from './componentes/lista-noticias/lista-noticias.component';
import { SeleccionTemaComponent } from './componentes/seleccion-tema/seleccion-tema.component';
import { PaginaDetallesComponent } from './componentes/pagina-detalles/pagina-detalles.component';
import { Error404Component } from './componentes/error404/error404.component';
import { OverPropioDirective } from './directivas/over-propio.directive';

@NgModule({
  declarations: [
    AppComponent,
    SeleccionTemaComponent,
    FormularioInicioSesionComponent,
    NoticiasComponent,
    FormularioNoticiasComponent,
    NoticiaComponent,
    NoticiasPadreComponent,
    ListaNoticiasComponent,
    PaginaDetallesComponent,
    Error404Component,
    OverPropioDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
