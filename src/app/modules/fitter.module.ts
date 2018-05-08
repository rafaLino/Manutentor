import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HomeComponent } from '../components/fitter/home/home.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'manutentor', component: HomeComponent}
    ])
  ],
  declarations: [HomeComponent],
  
})
export class FitterModule { }
