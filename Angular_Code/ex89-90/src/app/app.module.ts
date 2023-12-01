import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex89Component } from './ex89/ex89.component';
import { Ex90Component } from './ex90/ex90.component';
import { Exercise86Component } from './exercise86/exercise86.component';
import { Exercise87Component } from './exercise87/exercise87.component';
import { Exercise91Component } from './exercise91/exercise91.component';
import { Exercise92Component } from './exercise92/exercise92.component';
import { Exercise93Component } from './exercise93/exercise93.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Exercise100Component } from './exercise100/exercise100.component';
import { FakeProducttComponent } from './fake-productt/fake-productt.component';
import { BitcoinPriceIndexComponent } from './bitcoin-price-index/bitcoin-price-index.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookNewComponent } from './book-new/book-new.component';
import { FormsModule } from '@angular/forms';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CurriculumsComponent } from './curriculums/curriculums.component';
import { CurriculumNewComponent } from './curriculum-new/curriculum-new.component';
import { CurriculumDetailComponent } from './curriculum-detail/curriculum-detail.component';
import { CurriculumUpdateComponent } from './curriculum-update/curriculum-update.component';
@NgModule({
  declarations: [
    AppComponent,
    Ex89Component,
    Ex90Component,
    Exercise86Component,
    Exercise87Component,
    Exercise91Component,
    Exercise92Component,
    Exercise93Component,
    RoutingComponent,
    PagenotfoundComponent,
    Exercise100Component,
    FakeProducttComponent,
    BitcoinPriceIndexComponent,
    BooksComponent,
    BookDetailComponent,
    BookNewComponent,
    BookUpdateComponent,
    BookDeleteComponent,
    FileUploadComponent,
    CurriculumsComponent,
    CurriculumNewComponent,
    CurriculumDetailComponent,
    CurriculumUpdateComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
