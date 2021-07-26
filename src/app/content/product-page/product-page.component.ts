import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {IProduct} from "../../core/models/interfaces";
import {pluck} from "rxjs/operators";

@Component({
  selector: 'mbg-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {

  product$: Observable<IProduct> = this.activatedRoute.data.pipe(
    pluck('product')
  );
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }
}
