import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {IProduct} from "../../core/models/interfaces";
import {EMPTY, Observable, of} from "rxjs";
import {ProductService} from "../../core/services/product.service";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve <IProduct | null>{

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }
  resolve(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot): Observable<IProduct | null> {
    const id = route.params.id;
    return this.productService.getProduct(id).pipe(
      map((product: IProduct) => {
        if(!product) {
          this.router.navigate(['../home']);
        }
        return product;
      }),
      catchError( () => {
        this.router.navigate(['../home']);
        return EMPTY;
      })
    );
  }
}
