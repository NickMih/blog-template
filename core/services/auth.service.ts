import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {UserApi} from "../models/user-api";
import {delay, map, tap} from "rxjs/operators";
import { user } from "./data";
import {plainToClass} from "class-transformer";
import {StateService} from "./state.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private stateService: StateService) { }

  public login({login, password} : {login: string, password: string}): Observable<UserApi> {
    return of(user).pipe(
      map(user => plainToClass(UserApi, user)),
      tap( user => this.stateService.currentUser.next(user)),
      delay(2000)
    );
  }

}
