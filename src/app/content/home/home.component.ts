import { Component } from '@angular/core';
import {ProductService} from "../../core/services/product.service";
import {Observable} from "rxjs";
import {IProduct} from "../../core/models/interfaces";
import {data} from "../about/tags-cloud/data";

@Component({
  selector: 'mbg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products$: Observable<IProduct[]> = this.productService.getProducts();
  constructor(private productService: ProductService) {
    console.log(JSON.stringify(data));
  }
}
