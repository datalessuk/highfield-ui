import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { WrongRoute } from './components/wrong-route/wrong-route';

export const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    pathMatch: 'full',
    component: WrongRoute,
  },
];
