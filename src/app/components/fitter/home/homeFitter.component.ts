import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ioffer } from '../../../entities/offer';
import { OfferService } from '../../../services/offer.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Ifitter } from '../../../entities/fitter';
import { Iservice } from '../../../entities/service';
import { FitterService } from '../../../services/fitter.service';
import { ClientService } from '../../../services/client.service';
import { Iclient } from '../../../entities/client';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';
import { ServiceService } from '../../../services/service.service';
import { Status } from '../../shared/status.enum';
import { MzMediaService } from 'ng2-materialize';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Component({
  templateUrl: './homeFitter.component.html',
  styleUrls: ['./homeFitter.component.css']
})
export class HomeFitterComponent implements OnInit {


  public static updateService: Subject<boolean> = new Subject();
  public static updateOffer: Subject<boolean> = new Subject();

  private smallResolution: Observable<boolean>;
  private servico: Iservice;
  private currentUser: Ifitter;
  private ofertaServico: Ioffer;
  private client: Iclient;
  private modal: any;
  mensagemErroServico: string;
  form: FormGroup;
  ofertas: Ioffer[];
  card: boolean;
  finServicoloading: boolean;
  loading = true;
  loadingserv = true;
  loadingForm = false;





  constructor(
    private offerService: OfferService,
    //private fitterservice: FitterService,
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private svc: ServiceService,
    private mediaService: MzMediaService,
    private route: Router
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.VerificaLogin();
    this.smallResolution = this.mediaService.isActive('s');
  }

  ngOnInit() {
    this.loadOffer();
    this.loadService();

    this.form = this.formBuilder.group({
      OfferId: '',
      ClientId: '',
      ServiceTypeId: '',
      FitterId: this.currentUser.id,
      ApproximateTime: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^(\d{0,1})([0-3][^4-9]{0,1}):?([0-5]{0,1})(\d{0,1})?$/),

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

  private loadOffer() {

    this.offerService.getList(this.currentUser.id)
      .subscribe(offers => {
        this.ofertas = offers;
        this.loading = false;
      });
  }

  private loadService() {
    let id = this.currentUser.id;

    this.svc.getByFitter(id)
      .subscribe(currentServico => {
        this.servico = currentServico;
        this.mensagemErroServico = "Você não está em nenhum serviço atualmente";
        this.loadingserv = false;
      });
  }

  SelecionaOferta(oferta: Ioffer, modal) {
    if (oferta.status == Status.Aguardando) {
      alert("aguardando aprovação");
      return;
    }
    if (this.hasServico()) {
      alert("Você possui um serviço em execução");
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
    this.svc.post(data).subscribe(res => {
      this.loadingForm = false;

      this.loadOffer();
      this.modal.close();
    });
    //console.log(data.toString());
  }

  hasServico(): boolean {
    let has: boolean;
    if (this.servico == undefined || this.servico == null)
      has = false;
    else
      has = true;

    return has;
  }

  finalizarServico() {
    this.finServicoloading = true;
    this.svc.setStatus(this.servico.id, Status.Finalizado)
      .subscribe(res => {
        this.finServicoloading = false;
        this.loadService();
      });
  }


  VerificaLogin() {
    if (this.currentUser == undefined || localStorage.getItem("currentUser") == undefined)
      this.route.navigate(['login']);
  }
}
