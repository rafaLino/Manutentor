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
import { FitterListComponent } from '../components/client/fiiter-list/fitter-list.component';
import { FitterResolverService } from '../components/client/fiiter-list/fitter-resolver.service';





@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
       {path: 'home', component: HomeComponent, resolve: {fitter: TabelaFitterResolverService} },
       {path: 'selecionarmanutentor/:servicetype', component: FitterListComponent, resolve:{fitter: FitterResolverService}}
    ]),
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [HomeComponent, TabelaFitterComponent, FitterListComponent],
  providers: [
    FitterService,
    TypeServiceService,
    TabelaFitterResolverService,
    FitterResolverService
  ]
})
export class ClientModule { }
