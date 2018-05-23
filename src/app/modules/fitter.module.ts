import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FitterService } from '../services/fitter.service';
import { OfferService } from '../services/offer.service';
import { HomeFitterComponent } from '../components/fitter/home/homeFitter.component';
import { MzModalModule, MzButtonModule, MzSpinnerModule } from 'ng2-materialize';
import { ClientService } from '../services/client.service';
import { MzSidenavModule } from 'ng2-materialize';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'manutentor', component: HomeFitterComponent}
    ]),
    MzModalModule,
    MzButtonModule,
    MzSpinnerModule,
    MzSidenavModule

  ],
  declarations: [HomeFitterComponent],
  providers: [
    OfferService,
    FitterService,
    ClientService
  ]
})
export class FitterModule { }
