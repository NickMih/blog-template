import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {UserApi} from "../models/user-api";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  currentUser = new BehaviorSubject<UserApi>(null as any);
}
