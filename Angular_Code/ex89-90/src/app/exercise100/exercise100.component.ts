import { Component } from '@angular/core';
import { DongABankService } from '../dong-abank.service';
@Component({
  selector: 'app-exercise100',
  templateUrl: './exercise100.component.html',
  styleUrls: ['./exercise100.component.css']
})
export class Exercise100Component {
  data:any
  errMessage:string=''
  constructor(_service:DongABankService){
    _service.getDongABankData().subscribe({
    next:(data)=>{
      this.data=data 
    },
    error:(err)=>{
      this.errMessage=err}
    })
  } 
}
