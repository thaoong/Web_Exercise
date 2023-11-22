import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ptb1Component } from './ptb1/ptb1.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { LogibComponent } from './logib/logib.component';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event.component';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail.component';
import { ChitietsanphamComponent } from './chitietsanpham/chitietsanpham.component';
import { Customer } from './customer';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {path:"", redirectTo:"/gioithieu", pathMatch:"full"},
  //{path:"", redirectTo:"/service-product-image-event", pathMatch:"full"},
  {path:"pt1", component:Ptb1Component},
  {path:"slide", component:SlideshowComponent},
  {path:"gioithieu", component:AboutComponent},
  {path:"dssp", component:ListproductComponent},
  {path:"dssp/:id", component:ChitietsanphamComponent},
  {path:"dangnhap", component:LogibComponent},
  {path:'service-product-image-event', component:ServiceProductImageEventComponent},
  {path:'service-product-image-event/:id', component:ServiceProductImageEventDetailComponent},
  {path:"customer", component:CustomerComponent},
  {path:"**", component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[Ptb1Component, SlideshowComponent, AboutComponent]
