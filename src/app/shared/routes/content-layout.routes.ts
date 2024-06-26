import { Routes } from '@angular/router';

//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...

export const CONTENT_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('./../../home/home.module').then(m => m.HomeModule),
        data: { preload: true, universal: true }
    }
];