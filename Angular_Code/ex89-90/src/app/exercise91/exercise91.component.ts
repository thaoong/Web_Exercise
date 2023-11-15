import { Component } from '@angular/core';
import { ProductHttpService } from '../product-http.service';

@Component({
  selector: 'app-exercise91',
  templateUrl: './exercise91.component.html',
  styleUrls: ['./exercise91.component.css']
})
export class Exercise91Component {
  products:any
  errMessage:string=''
  constructor(_service:ProductHttpService){
  _service.getProductsHandleError().subscribe({
  next:(data)=>{this.products=data},
  error:(err)=>{this.errMessage=err}
  })
  }
}
