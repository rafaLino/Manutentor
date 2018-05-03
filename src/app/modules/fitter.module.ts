import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitterComponent } from '../components/fitter/fitter.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'fitter', component: FitterComponent}
    ])
  ],
  declarations: [FitterComponent],
  
})
export class FitterModule { }
