import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {UserApi} from "../models/user-api";
import {delay, map, tap} from "rxjs/operators";
import { user } from "./data";
import {plainToClass} from "class-transformer";
import {StateService} from "./state.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private stateService: StateService,
    private router: Router) { }

  public login({login, password} : {login: string, password: string}): Observable<UserApi> {
    return of(user).pipe(
      map(user => plainToClass(UserApi, user)),
      delay(1000),
      tap( user => this.stateService.currentUser.next(user)),
      tap(() => this.router.navigate(['']))
    );
  }

  public logout(): Observable<undefined> {
    return of(undefined).pipe(
      tap(user => this.stateService.currentUser.next(user))
    )
  }

}
