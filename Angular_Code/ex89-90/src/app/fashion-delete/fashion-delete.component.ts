import { Component } from '@angular/core';
import { FashionAPIService } from '../fashion-api.service';

@Component({
  selector: 'app-fashion-delete',
  templateUrl: './fashion-delete.component.html',
  styleUrls: ['./fashion-delete.component.css']
})
export class FashionDeleteComponent {
  fashions: any
  errMessage: string = ''
  constructor(private _service: FashionAPIService) {
    this._service.getFashions().subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err }
    })
  }
  deleteFashion(_id: any) {
    if (window.confirm('Are you sure delete this fashion?')) {
      this._service.deleteFashion(_id).subscribe({
        next: (data) => { this.fashions = data },
        error: (err) => { this.errMessage = err }
      })
    }
  }
}
