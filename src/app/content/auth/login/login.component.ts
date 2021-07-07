import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";
import {StateService} from "../../../core/services/state.service";

@UntilDestroy()
@Component({
  selector: 'mbg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hidePassword: boolean = true;
  loginForm: FormGroup = this._initForm();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    ) {}

  private _initForm(): FormGroup {
    return this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login(): void {
    this.authService.login(this.loginForm.value).pipe(untilDestroyed(this))
      .subscribe();
  }
}
