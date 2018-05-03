import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../components/client/home/home.component';
import { ClientService } from '../services/client.service';
import { FitterService } from '../services/fitter.service';
import { TypeServiceService } from '../services/type-service.service';
import { SharedModule } from '../components/shared/shared.module';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
       {path: 'home', component: HomeComponent  }
    ]),
    SharedModule
  ],
  declarations: [HomeComponent],
  providers: [
    ClientService,
    FitterService,
    TypeServiceService
  ]
})
export class ClientModule { }
