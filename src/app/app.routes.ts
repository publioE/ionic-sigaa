import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'pagina-login',
    pathMatch: 'full',
  },
  {
    path: 'pagina-login',
    loadComponent: () => import('./pagina-login/pagina-login.page').then( m => m.PaginaLoginPage)
  },
  {
    path: 'pagina-principal',
    loadComponent: () => import('./pagina-principal/pagina-principal.page').then( m => m.PaginaPrincipalPage)
  },
  {
    path: 'pagina-uc',
    loadComponent: () => import('./pagina-uc/pagina-uc.page').then( m => m.PaginaUcPage)
  },
];
