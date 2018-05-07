import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../components/client/home/home.component';
import { ClientService } from '../services/client.service';
import { FitterService } from '../services/fitter.service';
import { TypeServiceService } from '../services/type-service.service';
import { SharedModule } from '../components/shared/shared.module';
import { TabelaFitterComponent } from '../components/client/tabela-fitter/tabela-fitter.component';
import { TabelaFitterResolverService } from '../components/client/tabela-fitter/tabela-fitter-resolver.service';
import { ReactiveFormsModule } from '@angular/forms';

import { loadingComponent } from '../components/shared/loading.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
       {path: 'home', component: HomeComponent, resolve: {fitter: TabelaFitterResolverService} },       
    ]),
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [HomeComponent, TabelaFitterComponent,  loadingComponent],
  providers: [
    FitterService,
    TypeServiceService,
    TabelaFitterResolverService,
    
  ]
})
export class ClientModule { }
