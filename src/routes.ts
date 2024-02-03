import { Route } from '@angular/router';

export const AppRoutes: Route[] = [
    {
        loadChildren: () => import('../src/app/material.module').then((m) => m.MaterialModule),
        path: "material"
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'index.html',
        pathMatch: 'full',
        redirectTo: 'home'
    },
];
