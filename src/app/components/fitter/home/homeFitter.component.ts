import { Component, OnInit } from '@angular/core';
import { Ioffer } from '../../../entities/offer';
import { OfferService } from '../../../services/offer.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Ifitter } from '../../../entities/fitter';
import { Iservice } from '../../../entities/service';
import { FitterService } from '../../../services/fitter.service';
import { ClientService } from '../../../services/client.service';
import { Iclient } from '../../../entities/client';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';
import { ServiceService } from '../../../services/service.service';
import { Status } from '../../shared/status.enum';


@Component({
  templateUrl: './homeFitter.component.html',
  styleUrls: ['./homeFitter.component.css']
})
export class HomeFitterComponent implements OnInit {

  form: FormGroup;
  ofertas: Ioffer[];
  private servico: Iservice;
  loading = true;
  loadingserv = true;
  loadingForm = false;
  private currentUser: Ifitter;
  private ofertaServico: Ioffer;
  private client: Iclient;
  private modal: any;




  constructor(
    private offerService: OfferService,
    //private fitterservice: FitterService,
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private svc: ServiceService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadOffer();
    this.loadService();

    this.form = this.formBuilder.group({
      OfferId: '',
      ServiceTypeId: '',
      FitterId: this.currentUser.id,
      ApproximateTime: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^(\d{0,23}):?(\d{0,59})$/),
      ]),
      ],
      Value: ['', Validators.required],
      Comments: ['', Validators.required],
      Address: '',
      Number: '',
      Region: '',
      City: '',
      CEP: '',
      State: '',
    });
  }

private loadOffer(){

  this.offerService.getList(this.currentUser.id)
  .subscribe(offers => {
    this.ofertas = offers;
    this.loading = false;
  });
}

private loadService(){
   let id = this.currentUser.id;
   
  this.svc.getByFitter(id)
  .subscribe(currentServico => {
    this.servico = currentServico;    
    this.loadingserv = false;
  });
}

  SelecionaOferta(oferta: Ioffer, modal) {
    if(oferta.status == Status.Aguardando){
      alert("aguardando aprovação");
      return;
    }
    this.ofertaServico = oferta;
    this.modal = modal;
    this.clientService.get(this.ofertaServico.clientId).subscribe(cliente => {
      this.client = cliente;
    });
    this.preencheForm();
    modal.open();

  }

  private preencheForm() {
    this.form.patchValue({
      OfferId: this.ofertaServico.id,
      ClientId: this.ofertaServico.clientId,
      ServiceTypeId: this.ofertaServico.serviceType.id,
      Address: this.ofertaServico.address,
      Number: this.ofertaServico.number,
      Region: this.ofertaServico.region,
      City: this.ofertaServico.city,
      CEP: this.ofertaServico.cep,
      State: this.ofertaServico.state
    });
  }

  Salvar() {
    const data = JSON.stringify(this.form.value);
    this.loadingForm = true;
    console.log(data);
    this.svc.post(data).subscribe(res => {
      this.loadingForm = false;
      console.log(res);
      this.loadOffer();
      this.modal.close();
    });
    //console.log(data.toString());
  }
}
