import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fashion } from '../interfaces/Fashion';
import { ClientFashionService } from '../services/client-fashion.service';

@Component({
  selector: 'app-client-fashion-style',
  templateUrl: './client-fashion-style.component.html',
  styleUrls: ['./client-fashion-style.component.css']
})
export class ClientFashionStyleComponent {
  style: string = '' // style of droplist
  styleselected: string = '' // style selected previous
  styles: string[] = [] // distinct styles
  fashions: any// all fashions
  selectedStyleFashions: Fashion[] = [] // fashions by style
  fashion: any // fashion selected
  errMessage: string = ''

  constructor(private _service: ClientFashionService, private _router: Router, private _activeRoute: ActivatedRoute) {
    this.getFashions() // auto get all fashions
    this._activeRoute.params.subscribe(params => {
      this.styleselected = params['style'] // get style from url
      console.log(this.styleselected)
      if (this.styleselected != null) {
        this.getFashionsByStyle(this.styleselected) // get fashions by style
      }
    })
  }

  // get all fashions
  getFashions() {
    this._service.getFashions().subscribe({
      next: (data) => { this.fashions = data, this.getStyles() },
      error: (err) => { this.errMessage = err }
    })
  }

  // get distinct styles from fashions and store in styles
  getStyles() {
    this.styles = []
    for (let fashion of this.fashions) {
      if (!this.styles.includes(fashion.style)) {
        this.styles.push(fashion.style)
      }
    }
  }

  // get fashions by style
  getFashionsByStyle(style: string) {
    this._service.getFashionsByStyle(style).subscribe({
      next: (data) => { this.selectedStyleFashions = data },
      error: (err) => { this.errMessage = err }
    })
  }

  tempFashionsByStyle(style: string) {
    var tempFashions: Fashion[] = []
    for (let fashion of this.fashions) {
      if (fashion.style == style) {
        tempFashions.push(fashion)
      }
    }
    return tempFashions
  }

  // get fashions by id
  getFashionsById(id: string) {
    this._service.getFashion(id).subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err }
    })
  }

  // route to fashion detail page
  detailFashion(fashionId: string) {
    this._router.navigate(['client-fashion-detail', fashionId])
  }

  // route to fashions by style page
  fashionsByStyle(style: string) {
    if (style === 'All Style') {
      // If "All Style" is selected, navigate to the home page or any desired page
      this._router.navigate(['client-fashion']); // Use an empty string or replace with your home page route
    } else if (style !== '') {
      // If a specific style is selected, navigate to the fashions by style page
      this._router.navigate(['client-fashion-style', style]);
    }
  }
}