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
import { ServicoComponent } from '../components/client/servico/servico.component';
import { OfferService } from '../services/offer.service';
import { AppComponent } from '../app.component';
import { MzModalModule, MzModalService, MzCollectionModule, MzSpinnerModule, MzToastModule, MzToastService } from 'ng2-materialize';
import { MzButtonModule } from 'ng2-materialize';
import { MzSelectModule } from 'ng2-materialize';
import { MzTextareaModule } from 'ng2-materialize';
import { MzSidenavModule } from 'ng2-materialize';
import { MzIconModule, MzIconMdiModule } from 'ng2-materialize';
import { MzCollapsibleModule } from 'ng2-materialize';
import { MzSwitchModule } from 'ng2-materialize'
import { AlertModalComponent } from '../components/client/alert-modal/alertModal.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
       {path: 'home', component: HomeComponent /*, resolve: {fitter: TabelaFitterResolverService}*/ },       
    ]),
    ReactiveFormsModule,
    SharedModule,
    MzModalModule,
    MzButtonModule,
    MzSelectModule,
    MzTextareaModule,
    MzSidenavModule,
    MzIconMdiModule,
    MzIconModule,
    MzCollapsibleModule,
    MzSwitchModule,
    MzCollectionModule,
    MzSpinnerModule,
    MzToastModule
  ],
  exports: [
    MzModalModule,
    MzButtonModule,
    MzSelectModule,
    MzTextareaModule,
    MzSidenavModule,
    MzIconMdiModule,
    MzIconModule,
    MzCollapsibleModule,
    MzSwitchModule,
    MzCollectionModule,
    MzSpinnerModule,
    MzToastModule 
    

  ],
  declarations: [HomeComponent, TabelaFitterComponent, ServicoComponent, AlertModalComponent],
  providers: [
    FitterService,
    TypeServiceService,
    TabelaFitterResolverService,
    OfferService,
    MzModalService,
    MzToastService
    
  ],
  entryComponents:[
    AlertModalComponent
  ],
  bootstrap: [AppComponent]
})
export class ClientModule { }
