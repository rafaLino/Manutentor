import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FitterService } from '../services/fitter.service';
import { OfferService } from '../services/offer.service';
import { HomeFitterComponent } from '../components/fitter/home/homeFitter.component';
import { MzModalModule, MzButtonModule, MzSpinnerModule, MzValidationModule, MzInputModule, MzCardModule, MzMediaService, MzMediaModule, MzNavbarModule  } from 'ng2-materialize';
import { ClientService } from '../services/client.service';
import { MzSidenavModule } from 'ng2-materialize';
import { ServiceService } from '../services/service.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'manutentor', component: HomeFitterComponent, runGuardsAndResolvers: `always`}
    ]),
    ReactiveFormsModule,
    MzModalModule,
    MzButtonModule,
    MzSpinnerModule,
    MzSidenavModule,
    MzValidationModule,
    MzInputModule,
    MzCardModule,
    MzMediaModule,
    MzNavbarModule 

  ],
  declarations: [HomeFitterComponent],
  providers: [
    OfferService,
    FitterService,
    ClientService,
    ServiceService,
    MzMediaService
  ]
})
export class FitterModule { }
