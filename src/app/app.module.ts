import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HorarioComponent } from './pages/horario/horario.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DesarrolladoresComponent } from './pages/desarrolladores/desarrolladores.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    HomeComponent,
    NoticiasComponent,
    HorarioComponent,
    ProductosComponent,
    DesarrolladoresComponent,
    AcercaDeComponent,
    IniciarSesionComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
