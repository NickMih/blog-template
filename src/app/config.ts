import {InjectionToken} from "@angular/core";
import {environment} from "../environments/environment";


export const API_TOKEN = new InjectionToken('API_TOKEN');
export const API = environment.API;
