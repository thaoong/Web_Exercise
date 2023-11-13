import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise82',
  templateUrl: './exercise82.component.html',
  styleUrls: ['./exercise82.component.css']
})
export class Exercise82Component {
  public ketqua:string=""
  onClick(event:any){
    alert(event.pointerId)
    }
  onSubmit(value:string){
    alert(value)
  }
  onPlus(hsa:string, hsb:string)
  {
    let a=parseFloat(hsa)
    let b=parseFloat(hsb)
    this.ketqua= (a+b).toString()
  }
  onSubtract(hsa:string, hsb:string)
  {
    let a=parseFloat(hsa)
    let b=parseFloat(hsb)
    this.ketqua= (a-b).toString()
  }
  onMultiply(hsa:string, hsb:string)
  {
    let a=parseFloat(hsa)
    let b=parseFloat(hsb)
    this.ketqua= (a*b).toString()
  }
  onDivide(hsa:string, hsb:string)
  {
    let a=parseFloat(hsa)
    let b=parseFloat(hsb)
    this.ketqua= (a/b).toString()
  }
}
