import { Routes } from "@angular/router";

export const BLOG_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./content/home/home.module').then(m => m.HomeModule)

  },
  {
    path: 'login',
    loadChildren: () => import('./content/auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./content/auth/signup/signup.module').then(m => m.SignUpModule)
  }
]
