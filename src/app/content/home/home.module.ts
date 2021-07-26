import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import { MatCardModule} from "@angular/material/card";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import { MatGridListModule} from "@angular/material/grid-list";
import { CategoriesComponent } from './categories/categories.component';
import {FlexModule} from "@angular/flex-layout";
import {ProductsComponent} from "./products/products.component";
import {ProductComponent} from "./products/product/product.component";
import { ProductPageComponent } from '../product-page/product-page.component';



@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent,
    ProductsComponent,
    ProductComponent
  ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatGridListModule,
        RouterModule.forChild([{path: '', component: HomeComponent}]),
        FlexModule,
    ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
