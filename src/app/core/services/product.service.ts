import {Inject, Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {ICategory, IProduct} from "../models/interfaces";
import {categories, products} from "./data";
import { API_TOKEN } from "../../config";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(@Inject(API_TOKEN) private API: string) { }

  getProducts(): Observable<IProduct[]> {
    return of(products);
  }

  getCategories(): Observable<ICategory[]> {
    return of(categories);
  }
}
