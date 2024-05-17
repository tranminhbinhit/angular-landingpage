import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CONTENT_ROUTES } from './shared/routes/content-layout.routes';
import { LandingPageComponent } from './layouts/landingPage/landing-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LandingPageComponent,
    data: { title: 'Public Page' },
    children: CONTENT_ROUTES,
  },
  // {
  //   path: '',
  //   component: LandingPageComponent,
  //   data: { title: 'Public Page' },
  //   children: LANDING_PAGE_ROUTES,
  // },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
