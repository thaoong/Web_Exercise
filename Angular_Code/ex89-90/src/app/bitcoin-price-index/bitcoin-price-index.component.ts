import { Component } from '@angular/core';
import { BitcoinPriceIndexService } from '../bitcoin-price-index.service';
@Component({
  selector: 'app-bitcoin-price-index',
  templateUrl: './bitcoin-price-index.component.html',
  styleUrls: ['./bitcoin-price-index.component.css']
})
export class BitcoinPriceIndexComponent {
  bitcoin:any
  errMessage:string=''
  constructor(_service:BitcoinPriceIndexService){
    _service.getBitcoinPriceIndexData().subscribe({
    next:(data)=>{
    this.bitcoin=data 
  },
  error:(err)=>{
    this.errMessage=err}
    })
  }
}
