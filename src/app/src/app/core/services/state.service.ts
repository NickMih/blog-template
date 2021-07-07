import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {UserApi} from "../models/user-api";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  currentUser = new Subject<UserApi>();
}
