import { Component } from '@angular/core';
import { CurriculumService } from '../curriculum.service';

@Component({
  selector: 'app-curriculums',
  templateUrl: './curriculums.component.html',
  styleUrls: ['./curriculums.component.css']
})
export class CurriculumsComponent {
  curriculums:any;
  errMessage:string=''
  constructor(private _service: CurriculumService){
  this._service.getCurriculums().subscribe({
  next:(data)=>{this.curriculums=data},
  error:(err)=>{this.errMessage=err}
    })
  }
}
