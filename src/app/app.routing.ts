import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./home/components/homepage.component";
import { ErrorpageComponent } from "./errorpage/errorpage.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "",
    component: HomepageComponent,
    children: [
      {
        path: "",
        loadChildren: "./home/home.module#HomeModule",
      },
    ],
  },
  {
    path: "**",
    redirectTo: "error",
    pathMatch: "full",
  },
  { path: "error", component: ErrorpageComponent },
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [],
  providers: [],
})
export class AppRoutingModule {}
