import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClientFashionComponent } from './client-fashion/client-fashion.component';
import { ClientFashionDetailComponent } from './client-fashion-detail/client-fashion-detail.component';
import { ClientFashionStyleComponent } from './client-fashion-style/client-fashion-style.component';
import { CkeditorFormatPipe } from './ckeditor-format.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ClientFashionComponent,
    ClientFashionDetailComponent,
    ClientFashionStyleComponent,
    CkeditorFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
