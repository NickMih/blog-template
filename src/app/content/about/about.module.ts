import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {AboutComponent} from "./about.component";
import {FlexModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import { TagsCloudComponent } from './tags-cloud/tags-cloud.component';



@NgModule({
  declarations: [
    AboutComponent,
    TagsCloudComponent
  ],
  imports: [
    CommonModule,
    FlexModule,
    RouterModule.forChild([{path: '', component: AboutComponent}]),
    MatCardModule
  ]
})
export class AboutModule { }
