import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex89Component } from './ex89/ex89.component';
import { Exercise86Component } from './exercise86/exercise86.component';
import { Exercise93Component } from './exercise93/exercise93.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CurriculumsComponent } from './curriculums/curriculums.component';
const routes: Routes = [
  //{path:"", redirectTo:"product", pathMatch:"full"},
  {path:"", redirectTo:"curriculum", pathMatch:"full"},
  { path:'curriculum', component:CurriculumsComponent},
  {path:'product',component:Exercise86Component},
  {path:'list-product',component:Ex89Component},
  {path:'customer',component:Exercise93Component},
  {path:"**",component:PagenotfoundComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[
  Exercise86Component,
  Ex89Component,
  Exercise93Component,
  ]
  