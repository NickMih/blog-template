import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import { MatCardModule } from "@angular/material/card";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import { MatGridListModule} from "@angular/material/grid-list";



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    RouterModule.forChild([{path: '', component: HomeComponent}])
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
