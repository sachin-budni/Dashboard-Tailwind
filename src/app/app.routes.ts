import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'overview', loadComponent: () =>
        import('./components/dashboard-content/dashboard-content').then(m => m.DashboardContent) },
    { path: 'service-dashboard', loadComponent: () =>
        import('./components/service-dashboard/pregnancy-childbirth/pregnancy-childbirth').then(m => m.PregnancyChildbirth) },
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: '**', redirectTo: 'overview', pathMatch: 'full' },
];
