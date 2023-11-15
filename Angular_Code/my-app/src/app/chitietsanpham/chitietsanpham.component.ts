import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chitietsanpham',
  templateUrl: './chitietsanpham.component.html',
  styleUrls: ['./chitietsanpham.component.css']
})
export class ChitietsanphamComponent {
  productIdFromList=""
  products=[{"ProductId":"p1",
              "ProductName":"coca",
              "UnitPrice":15},
              {"ProductId":"p2",
              "ProductName":"pepsi",
              "UnitPrice":17},
              {"ProductId":"p3",
              "ProductName":"sprite",
              "UnitPrice":19},
              {"ProductId":"p4",
              "ProductName":"aqua",
              "UnitPrice":8}]
  productFromList:any
  constructor(private activeRoute:ActivatedRoute, private router:Router)
  {
    activeRoute.paramMap.subscribe(
      (param) => {
        let productId=param.get("id")
        if(productId!=null)
        {
          this.productIdFromList=productId
          this.productFromList=this.products.find(p=>p.ProductId==this.productIdFromList)
        }
      }
    )
  }
}
