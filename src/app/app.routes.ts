import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/demo/color-palette',
    pathMatch: 'full'
  },
  {
    path: 'page-not-found',
    loadComponent: () => import('./core/error-handlers/page-not-found/page-not-found.component')
      .then(m => m.PageNotFoundComponent),
  },
  {
    path: '**',
    redirectTo: '/page-not-found',
    pathMatch: 'full'
  }
];
