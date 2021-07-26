import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import { MatCardModule } from "@angular/material/card";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import { MatGridListModule} from "@angular/material/grid-list";
import { CategoriesComponent } from './categories/categories.component';
import {FlexModule} from "@angular/flex-layout";
import {AppModule} from "../../app.module";



@NgModule({
  declarations: [HomeComponent, CategoriesComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatGridListModule,
        RouterModule.forChild([{path: '', component: HomeComponent}]),
        FlexModule,
        AppModule
    ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
