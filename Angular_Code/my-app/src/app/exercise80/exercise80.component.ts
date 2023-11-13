import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise80',
  templateUrl: './exercise80.component.html',
  styleUrls: ['./exercise80.component.css']
})
export class Exercise80Component {
  public success="text-success"
  public error="text-error"
  public primary="text-primary"
  public normal="text-normal"
  public multiClass={
  "text-primary":true,
  "text-normal":true,
  "text-error":true
  }
  public complexity="text-complexity"
}
