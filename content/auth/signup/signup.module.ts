import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignupComponent} from "./signup.component";
import {RouterModule} from "@angular/router";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {NgxMaskModule} from "ngx-mask";



@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexModule,
    MatButtonModule,
    NgxMaskModule.forChild(),
    RouterModule.forChild([{path: '', component: SignupComponent}])
  ]
})
export class SignUpModule { }
