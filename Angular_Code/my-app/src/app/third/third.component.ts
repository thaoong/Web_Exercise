import { Component } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {
  public style1: string="MyStyle1"
  public complexstyle={
    "MyStyle1": true,
    "MyStyle3": true
  }
  processClick(data:string){
    alert(data)
  }
}
