import { Component } from '@angular/core';
import { FakeProductService } from '../fake-product.service';

@Component({
  selector: 'app-fake-productt',
  templateUrl: './fake-productt.component.html',
  styleUrls: ['./fake-productt.component.css']
})
export class FakeProducttComponent {
  data:any
  errMessage:string=''
  constructor(_service:FakeProductService){
    _service.getFakeProductData().subscribe({
    next:(data)=>{ this.data=data},
    error:(err)=>{
      this.errMessage=err 
      }
    })
  }
}
