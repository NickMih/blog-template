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
    return of<IProduct[]>(products);
  }

  getProduct(id: string): Observable<IProduct | never> {
    return of<IProduct>(products.find( (el,index, arr) => el.id.toString() === id ) as IProduct)
  }

  getCategories(): Observable<ICategory[]> {
    return of<ICategory[]>(categories);
  }
}
