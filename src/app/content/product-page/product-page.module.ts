import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ProductPageComponent} from "./product-page.component";

@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: ProductPageComponent}]),
  ]
})

export class ProductPageModule {

}
