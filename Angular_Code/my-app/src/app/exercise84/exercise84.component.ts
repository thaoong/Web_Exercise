import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise84',
  templateUrl: './exercise84.component.html',
  styleUrls: ['./exercise84.component.css']
})
export class Exercise84Component {
  public a:string=""
  public b:string=""
  public c:string=""
  //public result:string=""
  public delta:string=""
  findSolution()
  {
    let hsa=parseInt(this.a)
    let hsb=parseInt(this.b)
    let hsc=parseInt(this.c)
    this.delta = ((hsb*hsb) - (4*hsa*hsc)).toString()
    //if (delta < 0)
    //{
    //  this.result="Phương trình vô nghiệm"
    //}
    //else if (delta==0)
    //{
    //  this.result = "x=" + (-hsb/2*hsa)
    //}
    //else if(delta>0)
    //{
    //  //let x1 = (-hsb + (Math.sqrt(delta))/2*hsa)
    //  //let x2 = (-hsb - (Math.sqrt(delta))/2*hsa)
    //  this.result="x1=" +(-hsb + (Math.sqrt(delta))/2*hsa)+ "; x2="+(-hsb - (Math.sqrt(delta))/2*hsa)
    //}
  }
}
