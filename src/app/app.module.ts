import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
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
import { BrowserGlobalRefService, GlobalRefService } from './services/global-ref.service';
import { HttpClientModule } from '@angular/common/http';
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
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    BrowserTransferStateModule
  ],
  providers: [
    ProyectosService,
    ContenfulService,
    { provide: GlobalRefService, useClass: BrowserGlobalRefService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
