import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input("AppComponentData") public DataFromAppComponent:any
  @Input("MyValue") public MyValue:any

  @Output() public childEvent = new EventEmitter()
  sendDatatoAppComponent()
  {
    let data={"id":123,
              "name":"coca",
              "price":15000}
    this.childEvent.emit(data)
  }
} 
