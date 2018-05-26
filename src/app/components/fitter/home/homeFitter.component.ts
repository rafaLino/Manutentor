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



@Component({
  templateUrl: './homeFitter.component.html',
  styleUrls: ['./homeFitter.component.css']
})
export class HomeFitterComponent implements OnInit {

  form: FormGroup;
  servicos: Iservice[];
  ofertas: Ioffer[];
  loading = true;
  loadingserv = true;
  private currentUser: Ifitter;
  private ofertaServico: Ioffer;
  private client: Iclient;
  private modal: any;




  constructor(
    private offerService: OfferService,
    private fitterservice: FitterService,
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private svc: ServiceService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loading = this.carregarTabelas();

    this.form = this.formBuilder.group({
      OfferId: '',
      ServiceTypeId: '',
      ApproximateTime: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^(\d{0,23}):(\d{0,59})$/),
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
  private carregarTabelas(): boolean {
    let load = true;
    this.offerService.getList(this.currentUser.id)
      .subscribe(offers => {
        this.ofertas = offers;
        this.loading = false;
      });

    this.fitterservice.getServico(this.currentUser.id)
      .subscribe(currentServico => {
        this.servicos = currentServico;
        this.loadingserv = false;
      });
    return load;
  }



  SelecionaOferta(oferta: Ioffer, modal) {
    this.ofertaServico = oferta;
    this.clientService.get(this.ofertaServico.clientId).subscribe(cliente => {
      this.client = cliente;
    });
    this.preencheForm();
    modal.open();

  }

  private preencheForm() {
    this.form.patchValue({
      OfferId: this.ofertaServico.id,
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
    this.svc.post(data).subscribe(res => {
      console.log(res);
    }
    );
    //console.log(data.toString());
  }
}
