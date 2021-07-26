import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {IProduct} from "../../../core/models/interfaces";
import {ProductService} from "../../../core/services/product.service";

@Component({
  selector: 'mbg-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products$: Observable<IProduct[]> = this.productService.getProducts();

  constructor(
    private productService: ProductService
  ) { }
}
