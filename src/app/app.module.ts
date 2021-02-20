import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//sitema de rutas
import { APP_ROUTING } from './app.routes';

//servicios
import { ProyectosService } from './services/proyectos.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { HamburguesaComponent } from './shared/hamburguesa/hamburguesa.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    QuienSoyComponent,
    ProyectosComponent,
    ContactoComponent,
    ProyectoComponent,
    DomseguroPipe,
    HamburguesaComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule
  ],
  providers: [
    ProyectosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
