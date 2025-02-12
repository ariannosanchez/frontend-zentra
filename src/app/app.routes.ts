import { Routes } from '@angular/router';
import { AppLayout } from './shared/ui/layout/component/app.layout';

export const routes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(
          (m) => m.DashboardComponent
        )
      },
      {
        path: 'leads',
        loadChildren: () => import('./leads/features/lead.routes')
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  }
];
