import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThirdComponent } from './third/third.component';
import { FourComponent } from './four/four.component';
import { Ptb1Component } from './ptb1/ptb1.component';
import { Exercise78Component } from './exercise78/exercise78.component';
import { Exercise79Component } from './exercise79/exercise79.component';
import { Exercise80Component } from './exercise80/exercise80.component';
import { Exercise81Component } from './exercise81/exercise81.component';
import { Exercise82Component } from './exercise82/exercise82.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { Exercise83Component } from './exercise83/exercise83.component';
import { Exercise84Component } from './exercise84/exercise84.component';
import { ContactComponent } from './contact/contact.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { Listproduct2Component } from './listproduct2/listproduct2.component';
import { Listproduct3Component } from './listproduct3/listproduct3.component';
import { Listproduct4Component } from './listproduct4/listproduct4.component';
import { Listproduct5Component } from './listproduct5/listproduct5.component';
import { Listproduct6Component } from './listproduct6/listproduct6.component';
import { Listproduct7Component } from './listproduct7/listproduct7.component';

import {HttpClientModule} from '@angular/common/http';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event.component';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { LogibComponent } from './logib/logib.component';
import { ChitietsanphamComponent } from './chitietsanpham/chitietsanpham.component';
import { CustomerComponent } from './customer/customer.component'
@NgModule({
  declarations: [
    AppComponent,
    ThirdComponent,
    FourComponent,
    Ptb1Component,
    Exercise78Component,
    Exercise79Component,
    Exercise80Component,
    Exercise81Component,
    Exercise82Component,
    SlideshowComponent,
    Exercise83Component,
    Exercise84Component,
    ContactComponent,
    ListproductComponent,
    Listproduct2Component,
    Listproduct3Component,
    Listproduct4Component,
    Listproduct5Component,
    Listproduct6Component,
    Listproduct7Component,
    ServiceProductImageEventComponent,
    ServiceProductImageEventDetailComponent,
    RoutingComponent,
    AboutComponent,
    PagenotfoundComponent,
    TopmenuComponent,
    LeftmenuComponent,
    LogibComponent,
    ChitietsanphamComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
