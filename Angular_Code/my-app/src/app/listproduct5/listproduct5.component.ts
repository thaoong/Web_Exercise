import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-listproduct5',
  templateUrl: './listproduct5.component.html',
  styleUrls: ['./listproduct5.component.css']
})
export class Listproduct5Component {
  filterProducts:any
  constructor(ps:ProductService)
  {
    this.filterProducts=ps.searchProduct(12,18)
  }
}
