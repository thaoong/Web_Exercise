import { Component } from '@angular/core';
import { CustomerhttpService } from '../customerhttp.service';

@Component({
  selector: 'app-exercise93',
  templateUrl: './exercise93.component.html',
  styleUrls: ['./exercise93.component.css']
})
export class Exercise93Component {
  customers:any;
  constructor(private _service: CustomerhttpService){
  this._service.getCustomers().subscribe({
  next:(data)=>{this.customers=data} 
  })
}
}
