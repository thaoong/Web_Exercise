import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-listproduct6',
  templateUrl: './listproduct6.component.html',
  styleUrls: ['./listproduct6.component.css']
})
export class Listproduct6Component {
  filterProducts: any=null
  constructor(private ps:ProductService)
  {

  }
  searchProduct(min:string, max:string)
  {
    let v1=parseFloat(min)
    let v2=parseFloat(max)
    this.filterProducts=this.ps.searchProduct(v1, v2)
  }
}
