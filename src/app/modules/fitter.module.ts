import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FitterService } from '../services/fitter.service';
import { OfferService } from '../services/offer.service';
import { HomeFitterComponent } from '../components/fitter/home/homeFitter.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'manutentor', component: HomeFitterComponent}
    ])
  ],
  declarations: [HomeFitterComponent],
  providers: [
    OfferService,
    FitterService
  ]
})
export class FitterModule { }
