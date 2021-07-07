import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'mbg-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  hidePassword: boolean = true;
  signUpForm: FormGroup = this._initForm();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {}

  private _initForm(): FormGroup {
    return this.fb.group({
      login: ['', [Validators.required]],
      password: this.fb.group({
          password: ['', [Validators.required]],
          cpassword: ['', [Validators.required]]
        }, {
        validators: this.equalValidator
      }),
      phone: ['', [Validators.required]],
    });
  }

  signUp(): void {
    this.authService.signUp(this.signUpForm.value).pipe(untilDestroyed(this))
      .subscribe();
  }
  get passwordForm(): AbstractControl | null {
    return this.signUpForm.get('password');
  }
  private equalValidator(control: FormGroup): ValidationErrors | null {
    const [password, cpassword] = Object.values(control.value);

    return  password === cpassword ? null : {
      'notEqual': 'Пароли не совпадают'
    };
  }

}
