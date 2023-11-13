import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getListProduct()
  {
    let products=[{"ProductId":"p1",
              "ProductName":"coca",
              "UnitPrice":15},
              {"ProductId":"p2",
              "ProductName":"pepsi",
              "UnitPrice":17},
              {"ProductId":"p3",
              "ProductName":"sprite",
              "UnitPrice":19}]
    return products
  }
  searchProduct(min:number, max:number)
  {
    let products=this.getListProduct()
    let filter=products.filter(p=>p.UnitPrice>=min && p.UnitPrice<=max)
    return filter
  }
}
