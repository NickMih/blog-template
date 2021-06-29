import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../core/services/auth.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";

@UntilDestroy()
@Component({
  selector: 'mbg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hidePassword: boolean = true;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) {
  }

  private _initForm(): FormGroup {
    return this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  enter(): void {
    this.authService.login(this.loginForm.value).pipe(
      tap(user => console.log(user)),
      tap(() => this.router.navigate([''])),
      untilDestroyed(this))
      .subscribe();
  }

  ngOnInit() {
    this.loginForm = this._initForm();
  }
}
