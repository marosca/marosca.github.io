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
import { ProjectsListComponent } from './components/projectsList/projects-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectDetailComponent } from './components/projectDetails/project-detail.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { HamburguesaComponent } from './shared/hamburguesa/hamburguesa.component';
import { ContenfulService } from './services/contenful.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    QuienSoyComponent,
    ProjectsListComponent,
    ContactComponent,
    ProjectDetailComponent,
    DomseguroPipe,
    HamburguesaComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule
  ],
  providers: [
    ProyectosService,
    ContenfulService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
