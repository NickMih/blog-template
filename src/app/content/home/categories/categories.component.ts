import {Component, Inject, inject, OnInit} from '@angular/core';
import {ProductService} from "../../../core/services/product.service";
import {Observable} from "rxjs";
import {ICategory} from "../../../core/models/interfaces";
import {API_TOKEN} from "../../../config";

@Component({
  selector: 'mbg-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  categories$: Observable<ICategory[]> = this.productService.getCategories();

  constructor(private productService: ProductService) { }
}
