import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise83',
  templateUrl: './exercise83.component.html',
  styleUrls: ['./exercise83.component.css']
})
export class Exercise83Component {
  public name:string=''
  public address:string=''
  setDefaultAddress(){
  this.address='13 Hung Vuong street'
  }

}
