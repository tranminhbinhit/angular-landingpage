import { NgModule } from "@angular/core";
import { CommonModule, JsonPipe } from "@angular/common";
import { HomePageComponent } from "./home-page/home-page.component";
import { RouterModule, Routes } from "@angular/router";
import { HomePageDetailComponent } from './home-page-detail/home-page-detail.component';
import { BynLandingPageModule } from 'byn-landing-page';

const route: Routes = [
  {
    path: "",
    component: HomePageComponent,
  },
  {
    path: ":nameRewrite",
    component: HomePageDetailComponent,
  }
];

@NgModule({
  declarations: [HomePageComponent, HomePageDetailComponent],
  imports: [RouterModule.forChild(route), CommonModule, BynLandingPageModule],
})
export class HomeModule {}
