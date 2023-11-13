import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent {
  public imageIndex:Number=1
  changeImage1()
  {
    this.imageIndex=1
  }
  changeImage2()
  {
    this.imageIndex=2
  }
  public fruits=["Mango", "Apple", "Pineapple", "Banana"]
}
