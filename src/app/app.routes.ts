import { Routes } from "@angular/router";
import {ProductResolverService} from "./content/product-page/product-resolver.service";

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
  },
  {
    path: 'about',
    loadChildren: () => import('./content/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'product/:id',
    loadChildren: () => import('./content/product-page/product-page.module').then(m => m.ProductPageModule),
    resolve: { product: ProductResolverService }
  }
]
