import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from "./shared/header/header.module";
import { RouterModule } from "@angular/router";
import { BLOG_ROUTES } from "./app.routes";
import {LoadingBarHttpClientModule} from "@ngx-loading-bar/http-client";
import {LOADING_BAR_CONFIG, LoadingBarModule} from "@ngx-loading-bar/core";
import { API, API_TOKEN } from "./config";
import {NgxMaskModule} from "ngx-mask";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "./core/interceptors/tokenInterceptor";
import { ProductsComponent } from './content/home/products/products.component';
import { ProductComponent } from './content/home/products/product/product.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductsComponent,
        ProductComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HeaderModule,
        LoadingBarModule,
        LoadingBarHttpClientModule,
        NgxMaskModule.forRoot(),
        RouterModule.forRoot(BLOG_ROUTES, {relativeLinkResolution: 'legacy'})
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
        {provide: LOADING_BAR_CONFIG, useValue: {latencyThreshold: 100}},
        {provide: API_TOKEN, useValue: API}
    ],
    exports: [
        ProductsComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
