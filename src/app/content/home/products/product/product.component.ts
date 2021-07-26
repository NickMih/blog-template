import {Component, Input} from '@angular/core';
import {IProduct} from "../../../../core/models/interfaces";

@Component({
  selector: 'mbg-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: IProduct;

  constructor() { }

}
