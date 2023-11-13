import { Component } from '@angular/core';

@Component({
  selector: 'app-ptb1',
  templateUrl: './ptb1.component.html',
  styleUrls: ['./ptb1.component.css']
})
export class Ptb1Component {
  public hesoa:string=""
  public hesob:string=""
  public ketqua:string=""

  xulyGiai(){
    let a=parseFloat(this.hesoa)
    let b=parseFloat(this.hesob)
    if (a==0 && b==0)
    {
      this.ketqua="Vo so nghiem"
    }
    else if (a==0 && b!=0)
    {
      this.ketqua="Vo nghiem"
    }
    else
    {
      this.ketqua="x="+(-b/a)
    }
  }
}
