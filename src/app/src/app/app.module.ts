import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from "./shared/header/header.module";
import { RouterModule } from "@angular/router";
import { BLOG_ROUTES } from "./app.routes";
import { HomeComponent } from './home/home.component';
import {LoadingBarHttpClientModule} from "@ngx-loading-bar/http-client";
import {LOADING_BAR_CONFIG, LoadingBarModule} from "@ngx-loading-bar/core";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    LoadingBarModule,
    LoadingBarHttpClientModule,
    RouterModule.forRoot(BLOG_ROUTES, {relativeLinkResolution: 'legacy'})
  ],
  providers: [
    { provide: LOADING_BAR_CONFIG, useValue: { latencyThreshold: 100 } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
