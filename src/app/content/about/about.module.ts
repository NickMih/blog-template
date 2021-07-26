import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {AboutComponent} from "./about.component";
import {FlexModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    FlexModule,
    RouterModule.forChild([{path: '', component: AboutComponent}]),
    MatCardModule
  ]
})
export class AboutModule { }
