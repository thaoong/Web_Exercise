import { Component } from '@angular/core';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent {
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
}
