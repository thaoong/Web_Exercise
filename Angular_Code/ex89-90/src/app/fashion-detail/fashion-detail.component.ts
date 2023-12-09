import { Component } from '@angular/core';
import { FashionAPIService } from '../fashion-api.service';

@Component({
  selector: 'app-fashion-detail',
  templateUrl: './fashion-detail.component.html',
  styleUrls: ['./fashion-detail.component.css']
})
export class FashionDetailComponent {
  fashion:any;
  errMessage:string=''
  constructor(private _service: FashionAPIService){
  }
  searchFashion(_id:string)
  {
    this._service.getFashion(_id).subscribe({
      next:(data)=>{this.fashion=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
