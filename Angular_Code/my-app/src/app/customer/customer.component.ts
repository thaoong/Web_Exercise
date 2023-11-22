import { Component } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  customer=new Customer("Thao","thao@gmail.com","123456")
  processInformation()
  {
    alert(this.customer.name)
  }
}
