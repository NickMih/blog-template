import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";

export const BLOG_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }
]
