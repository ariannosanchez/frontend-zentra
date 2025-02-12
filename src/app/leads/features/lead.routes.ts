import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./lead-list/lead-list.component').then(
      (m) => m.LeadListComponent
    )
  }
] as Routes;
