import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-listproduct3',
  templateUrl: './listproduct3.component.html',
  styleUrls: ['./listproduct3.component.css']
})
export class Listproduct3Component {
  products:any
  constructor(private productService:ProductService)
  {
    this.products=productService.getListProduct()
  }
}
