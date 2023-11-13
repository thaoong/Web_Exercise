import { Component } from '@angular/core';

@Component({
  selector: 'app-listproduct2',
  templateUrl: './listproduct2.component.html',
  styleUrls: ['./listproduct2.component.css']
})
export class Listproduct2Component {
  products=[{"ProductId":"p1",
              "ProductName":"coca",
              "UnitPrice":15},
              {"ProductId":"p2",
              "ProductName":"pepsi",
              "UnitPrice":17},
              {"ProductId":"p3",
              "ProductName":"sprite",
              "UnitPrice":19}]
}
