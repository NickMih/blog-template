import { Component } from '@angular/core';
import {StateService} from "../../core/services/state.service";
import {Observable} from "rxjs";
import {UserApi} from "../../core/models/user-api";
import {AuthService} from "../../core/services/auth.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'mbg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentUser: Observable<UserApi> = this.stateService.currentUser.asObservable();
  constructor(
    private stateService: StateService,
    private authService: AuthService
  ) {
  }

  logout(): void {
    this.authService.logout().pipe(untilDestroyed(this)).subscribe();
  }
}
