import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Add this import:
import { loadRemoteModule } from '@angular-architects/native-federation';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },

  // Add this route:
  {
    path: 'mfe1',
    loadChildren: () => loadRemoteModule('mfe1', './routes').then((m) => m.APP_ROUTES)
  },

  {
    path: 'mfe2',
    loadComponent: () => loadRemoteModule('mfe2', './Component').then((m) => m.AppComponent)
  },

  {
    path: '**',
    component: NotFoundComponent
  }

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];
