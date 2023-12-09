import { Component } from '@angular/core';
import { from } from 'rxjs';
import { FashionAPIService } from '../fashion-api.service';
import { Fashion } from '../Fashion';

@Component({
  selector: 'app-fashion-update',
  templateUrl: './fashion-update.component.html',
  styleUrls: ['./fashion-update.component.css']
})
export class FashionUpdateComponent {
  fashion = new Fashion();
  errMessage: string = ''
  constructor(private _service: FashionAPIService) {
  }
  public setFashion(f: Fashion) {
    this.fashion = f
  }
  onFileSelected(event: any, fashion: Fashion) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      fashion.fashion_image = reader.result!.toString()
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  putFashion() {
    this._service.putFashion(this.fashion).subscribe({
      next: (data) => { this.fashion = data },
      error: (err) => { this.errMessage = err }
    })
    alert('Update fashion success')
  }
}
