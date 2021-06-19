import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProjectDetailComponent } from './components/projectDetails/project-detail.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'proyecto/:url', component: ProjectDetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true});
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
