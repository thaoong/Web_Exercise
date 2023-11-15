import { Component } from '@angular/core';
import { CatalogServiceService } from '../catalog-service.service';

@Component({
  selector: 'app-ex89',
  templateUrl: './ex89.component.html',
  styleUrls: ['./ex89.component.css']
})
export class Ex89Component {
  products:any
  constructor(ps:CatalogServiceService)
  {
    this.products=ps.getCategories()
  }
}
