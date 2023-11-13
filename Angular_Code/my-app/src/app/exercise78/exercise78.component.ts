import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise78',
  templateUrl: './exercise78.component.html',
  styleUrls: ['./exercise78.component.css']
})
export class Exercise78Component {
  public myVar:string= "Hello Angular"
  getCapitalLetters() 
  {
    const capitalLetters = this.myVar.match(/[A-Z]/g);
    return capitalLetters;
  }

  getLowerLetters() 
  {
    const capitalLetters = this.myVar.match(/[a-z]/g);
    return capitalLetters;
  }
}
