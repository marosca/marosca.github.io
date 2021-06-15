import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing
import { APP_ROUTING } from './app.routes';

// Services
import { ProyectosService } from './services/proyectos.service';
import { ContenfulService } from './contentful/service/contenful.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/quien-soy/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectDetailComponent } from './components/projectDetails/project-detail.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { HamburguesaComponent } from './shared/hamburguesa/hamburguesa.component';
import { ProjectsListComponent } from './components/projectsList/projects-list.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutMeComponent,
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
